/**
 * Hybrid project-preview generator.
 *
 * - screenshot: Playwright chromium viewport capture of project.link
 * - card:       branded inline HTML card (see ./preview-card.ts)
 *
 * Usage:
 *   npm run previews [-- --dry-run] [-- --force] [-- --only=<substring>]
 */

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, type Browser, type BrowserContext } from "playwright";
import sharp from "sharp";

import { projectsData } from "../src/data/projects";
import type { Project } from "../src/types/Project";
import { buildCardHtml } from "./preview-card";

export const TEMPLATE_VERSION = 1;

const SCREENSHOT_VIEWPORT = { width: 1200, height: 630 } as const;
const CARD_VIEWPORT = { width: 1200, height: 600 } as const;
const NAV_TIMEOUT_MS = 30_000;
const SPA_WAIT_MS = 2_000; // within ~1500–2500ms hydration window
const WEBP_QUALITY = 80;
const DESKTOP_UA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, "..");
const PREVIEW_DIR = path.join(ROOT, "src", "assets", "preview");
const MANIFEST_PATH = path.join(PREVIEW_DIR, "previews.manifest.json");

type Mode = "screenshot" | "card";

interface ManifestEntry {
    hash: string;
    mode: Mode;
    source: string | null;
    template: number;
}

type Manifest = Record<string, ManifestEntry>;

interface ResolvedOutput {
    absPath: string;
    relPath: string;
    fileName: string;
    missingImage: boolean;
}

interface CliOptions {
    dryRun: boolean;
    force: boolean;
    only: string | null;
}

/** Hybrid rule: screenshot only when link is a non-empty string AND not comingSoon. */
export function decideMode(project: Project): Mode {
    const hasLink =
        typeof project.link === "string" && project.link.trim().length > 0;
    if (hasLink && project.comingSoon !== true) {
        return "screenshot";
    }
    return "card";
}

/** lowercase, non-alphanumeric runs → single `-`. */
export function slugify(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * sha256 over the stable project payload + capture mode.
 * Mode is included so a screenshot→card fallback is not treated as
 * up-to-date when the project still plans to use screenshot mode.
 */
export function computeHash(project: Project, mode: Mode): string {
    const payload = JSON.stringify({
        title: project.title,
        description: project.description,
        image: project.image,
        link: project.link,
        comingSoon: project.comingSoon,
        tags: project.tags.map((t) => t.name),
        category: project.category,
        mode,
        TEMPLATE_VERSION,
    });
    return createHash("sha256").update(payload).digest("hex");
}

/** ALWAYS prefer project.image; derive a slug only when image is missing. */
export function resolveOutput(project: Project): ResolvedOutput {
    const image = typeof project.image === "string" ? project.image.trim() : "";
    if (image.length > 0) {
        const relInsideAssets = image.startsWith("/")
            ? image.slice(1)
            : image;
        const absPath = path.join(ROOT, "src", "assets", relInsideAssets);
        return {
            absPath,
            relPath: path.relative(ROOT, absPath).replaceAll("\\", "/"),
            fileName: path.basename(absPath),
            missingImage: false,
        };
    }
    const slug = slugify(project.title) || "project";
    const absPath = path.join(PREVIEW_DIR, `${slug}.webp`);
    return {
        absPath,
        relPath: path.relative(ROOT, absPath).replaceAll("\\", "/"),
        fileName: `${slug}.webp`,
        missingImage: true,
    };
}

export function parseArgs(argv: string[]): CliOptions {
    let dryRun = false;
    let force = false;
    let only: string | null = null;
    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i];
        if (arg === "--dry-run") dryRun = true;
        else if (arg === "--force") force = true;
        else if (arg.startsWith("--only=")) only = arg.slice("--only=".length);
        else if (arg === "--only" && i + 1 < argv.length) only = argv[++i];
    }
    return { dryRun, force, only };
}

function loadManifest(): Manifest {
    if (!existsSync(MANIFEST_PATH)) return {};
    try {
        return JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as Manifest;
    } catch {
        console.warn("warn: could not parse existing manifest; starting fresh");
        return {};
    }
}

function saveManifest(manifest: Manifest): void {
    mkdirSync(PREVIEW_DIR, { recursive: true });
    writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

function webpFromPng(png: Buffer): Promise<Buffer> {
    return sharp(png).webp({ quality: WEBP_QUALITY }).toBuffer();
}

async function captureScreenshot(pageContext: BrowserContext, link: string): Promise<Buffer> {
    const page = await pageContext.newPage();
    try {
        const response = await page.goto(link, {
            waitUntil: "domcontentloaded",
            timeout: NAV_TIMEOUT_MS,
        });
        if (response) {
            const status = response.status();
            if (status < 200 || status >= 300) {
                throw new Error(`HTTP ${status}`);
            }
        }
        // Extra wait for SPA hydration (~1500–2500ms window)
        await page.waitForTimeout(SPA_WAIT_MS);
        const png = await page.screenshot({ type: "png" });
        return await webpFromPng(png);
    } finally {
        await page.close().catch(() => {});
    }
}

async function captureCard(pageContext: BrowserContext, project: Project): Promise<Buffer> {
    const page = await pageContext.newPage();
    try {
        await page.setViewportSize(CARD_VIEWPORT);
        const html = buildCardHtml({
            title: project.title,
            description: project.description,
            tags: project.tags,
            comingSoon: project.comingSoon,
        });
        await page.setContent(html, { waitUntil: "load" });
        const png = await page.screenshot({ type: "png" });
        return await webpFromPng(png);
    } finally {
        await page.close().catch(() => {});
    }
}

async function main(): Promise<void> {
    const { dryRun, force, only } = parseArgs(process.argv.slice(2));

    const selected = projectsData.filter((project) =>
        only ? project.title.toLowerCase().includes(only.toLowerCase()) : true,
    );

    const manifest = loadManifest();
    let manifestDirty = false;

    // Dry-run: plan only, no browser, no writes.
    if (dryRun) {
        for (const project of selected) {
            const out = resolveOutput(project);
            if (out.missingImage) {
                console.warn(
                    `warn: "${project.title}" has no image field; would write ${out.relPath} — add an image field to projects.ts`,
                );
            }
            const mode = decideMode(project);
            const hash = computeHash(project, mode);
            const entry = manifest[out.fileName];
            const upToDate =
                !force &&
                entry?.hash === hash &&
                entry.mode === mode &&
                existsSync(out.absPath);
            if (upToDate) {
                console.log(`skip (up-to-date)  ${project.title}  ${out.relPath}`);
            } else {
                console.log(`plan: ${mode}  ${project.title}  ${out.relPath}`);
            }
        }
        return;
    }

    let browser: Browser | null = null;
    let context: BrowserContext | null = null;

    try {
        for (const project of selected) {
            const out = resolveOutput(project);
            if (out.missingImage) {
                console.warn(
                    `warn: "${project.title}" has no image field; writing ${out.relPath} — add an image field to projects.ts`,
                );
            }

            const plannedMode = decideMode(project);
            const plannedHash = computeHash(project, plannedMode);
            const entry = manifest[out.fileName];
            if (
                !force &&
                entry?.hash === plannedHash &&
                entry.mode === plannedMode &&
                existsSync(out.absPath)
            ) {
                console.log(`skip (up-to-date)  ${project.title}  ${out.relPath}`);
                continue;
            }

            let mode: Mode = plannedMode;
            let buffer: Buffer;
            let warning: string | null = null;

            if (!browser) {
                browser = await chromium.launch({ headless: true });
                context = await browser.newContext({
                    viewport: SCREENSHOT_VIEWPORT,
                    userAgent: DESKTOP_UA,
                    deviceScaleFactor: 1,
                });
            }

            if (plannedMode === "screenshot") {
                try {
                    buffer = await captureScreenshot(context, project.link as string);
                } catch (err) {
                    warning = err instanceof Error ? err.message : String(err);
                    mode = "card";
                    buffer = await captureCard(context, project);
                }
            } else {
                buffer = await captureCard(context, project);
            }

            mkdirSync(path.dirname(out.absPath), { recursive: true });
            writeFileSync(out.absPath, buffer);

            // Store the hash for the mode that actually produced the file, so a
            // fallback card does not look like a successful screenshot later.
            manifest[out.fileName] = {
                hash: computeHash(project, mode),
                mode,
                source:
                    typeof project.link === "string" && project.link.trim().length > 0
                        ? project.link
                        : null,
                template: TEMPLATE_VERSION,
            };
            manifestDirty = true;

            if (warning) {
                console.log(
                    `fallback-card: ${warning}  ${project.title}  ${out.relPath}`,
                );
            } else {
                console.log(`${mode}  ${project.title}  ${out.relPath}`);
            }
        }

        if (manifestDirty) {
            saveManifest(manifest);
        }
    } finally {
        if (context) await context.close().catch(() => {});
        if (browser) await browser.close().catch(() => {});
    }
}

const isDirectRun =
    process.argv[1] !== undefined &&
    path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectRun) {
    main().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}
