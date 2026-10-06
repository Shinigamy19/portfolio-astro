/**
 * Hybrid project-preview generator.
 *
 * - screenshot: Playwright chromium viewport capture of project.link
 * - card:       branded inline HTML card (see ./preview-card.ts)
 *
 * Dual-theme output: for each project we write
 *   <name>.light.webp  — prefers-color-scheme: light
 *   <name>.dark.webp   — prefers-color-scheme: dark
 *   <name>.webp        — legacy fallback (kept when it already exists;
 *                        written as a copy of dark for new projects)
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
import { buildCardHtml, type CardTheme } from "./preview-card";

export const TEMPLATE_VERSION = 2;

const SCREENSHOT_VIEWPORT = { width: 1200, height: 630 } as const;
const CARD_VIEWPORT = { width: 1200, height: 600 } as const;
const NAV_TIMEOUT_MS = 30_000;
const SPA_WAIT_MS = 2_000;
const WEBP_QUALITY = 80;
const DESKTOP_UA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const THEMES: CardTheme[] = ["light", "dark"];

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
    theme?: CardTheme;
}

type Manifest = Record<string, ManifestEntry>;

interface VariantOutput {
    absPath: string;
    relPath: string;
    fileName: string;
}

interface ResolvedOutput {
    base: VariantOutput;
    light: VariantOutput;
    dark: VariantOutput;
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
 * sha256 over the stable project payload + capture mode + theme.
 * Theme is included so light and dark captures never collide in the manifest.
 */
export function computeHash(project: Project, mode: Mode, theme: CardTheme): string {
    const payload = JSON.stringify({
        title: project.title,
        description: project.description,
        image: project.image,
        link: project.link,
        comingSoon: project.comingSoon,
        tags: project.tags.map((t) => t.name),
        category: project.category,
        mode,
        theme,
        TEMPLATE_VERSION,
    });
    return createHash("sha256").update(payload).digest("hex");
}

function variantFor(baseAbs: string, theme: CardTheme): VariantOutput {
    const parsed = path.parse(baseAbs);
    const absPath = path.join(parsed.dir, `${parsed.name}.${theme}${parsed.ext}`);
    return {
        absPath,
        relPath: path.relative(ROOT, absPath).replaceAll("\\", "/"),
        fileName: path.basename(absPath),
    };
}

function baseVariant(baseAbs: string): VariantOutput {
    return {
        absPath: baseAbs,
        relPath: path.relative(ROOT, baseAbs).replaceAll("\\", "/"),
        fileName: path.basename(baseAbs),
    };
}

/** ALWAYS prefer project.image; derive a slug only when image is missing. */
export function resolveOutput(project: Project): ResolvedOutput {
    const image = typeof project.image === "string" ? project.image.trim() : "";
    let baseAbs: string;
    let missingImage: boolean;

    if (image.length > 0) {
        const relInsideAssets = image.startsWith("/")
            ? image.slice(1)
            : image;
        baseAbs = path.join(ROOT, "src", "assets", relInsideAssets);
        missingImage = false;
    } else {
        const slug = slugify(project.title) || "project";
        baseAbs = path.join(PREVIEW_DIR, `${slug}.webp`);
        missingImage = true;
    }

    return {
        base: baseVariant(baseAbs),
        light: variantFor(baseAbs, "light"),
        dark: variantFor(baseAbs, "dark"),
        missingImage,
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

async function captureScreenshot(
    pageContext: BrowserContext,
    link: string,
    colorScheme: "light" | "dark",
): Promise<Buffer> {
    const page = await pageContext.newPage();
    try {
        await page.emulateMedia({ colorScheme });
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
        await page.waitForTimeout(SPA_WAIT_MS);
        const png = await page.screenshot({ type: "png" });
        return await webpFromPng(png);
    } finally {
        await page.close().catch(() => {});
    }
}

async function captureCard(
    pageContext: BrowserContext,
    project: Project,
    theme: CardTheme,
): Promise<Buffer> {
    const page = await pageContext.newPage();
    try {
        await page.setViewportSize(CARD_VIEWPORT);
        await page.emulateMedia({ colorScheme: theme });
        const html = buildCardHtml({
            title: project.title,
            description: project.description,
            tags: project.tags,
            comingSoon: project.comingSoon,
            theme,
        });
        await page.setContent(html, { waitUntil: "load" });
        const png = await page.screenshot({ type: "png" });
        return await webpFromPng(png);
    } finally {
        await page.close().catch(() => {});
    }
}

function writeVariant(out: VariantOutput, buffer: Buffer): void {
    mkdirSync(path.dirname(out.absPath), { recursive: true });
    writeFileSync(out.absPath, buffer);
}

async function main(): Promise<void> {
    const { dryRun, force, only } = parseArgs(process.argv.slice(2));

    const selected = projectsData.filter((project) =>
        only ? project.title.toLowerCase().includes(only.toLowerCase()) : true,
    );

    const manifest = loadManifest();
    let manifestDirty = false;

    if (dryRun) {
        for (const project of selected) {
            const out = resolveOutput(project);
            const lightOk = existsSync(out.light.absPath);
            const darkOk = existsSync(out.dark.absPath);
            if (!force && lightOk && darkOk) {
                console.log(
                    `keep (exists)  ${project.title}  ${out.light.fileName} + ${out.dark.fileName}`,
                );
                continue;
            }
            if (out.missingImage) {
                console.warn(
                    `warn: "${project.title}" has no image field; would write ${out.base.relPath} — add an image field to projects.ts`,
                );
            }
            const mode = decideMode(project);
            const missing: string[] = [];
            if (force || !lightOk) missing.push("light");
            if (force || !darkOk) missing.push("dark");
            console.log(
                `plan: ${mode}  ${project.title}  ${missing.join("+")}  (+ fallback ${out.base.fileName})`,
            );
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
                    `warn: "${project.title}" has no image field; writing ${out.base.relPath} — add an image field to projects.ts`,
                );
            }

            const lightOk = existsSync(out.light.absPath);
            const darkOk = existsSync(out.dark.absPath);
            if (!force && lightOk && darkOk) {
                console.log(
                    `keep (exists)  ${project.title}  ${out.light.fileName} + ${out.dark.fileName}`,
                );
                continue;
            }

            const plannedMode = decideMode(project);
            let mode: Mode = plannedMode;
            const buffers: Partial<Record<CardTheme, Buffer>> = {};
            const warnings: string[] = [];

            if (!context) {
                if (!browser) {
                    browser = await chromium.launch({ headless: true });
                }
                context = await browser.newContext({
                    viewport: SCREENSHOT_VIEWPORT,
                    userAgent: DESKTOP_UA,
                    deviceScaleFactor: 1,
                });
            }

            for (const theme of THEMES) {
                if (!force && existsSync(theme === "light" ? out.light.absPath : out.dark.absPath)) {
                    continue;
                }
                if (plannedMode === "screenshot") {
                    try {
                        buffers[theme] = await captureScreenshot(
                            context,
                            project.link as string,
                            theme,
                        );
                    } catch (err) {
                        const warning = err instanceof Error ? err.message : String(err);
                        warnings.push(`${theme}: ${warning}`);
                        mode = "card";
                        buffers[theme] = await captureCard(context, project, theme);
                    }
                } else {
                    buffers[theme] = await captureCard(context, project, theme);
                }
            }

            const written: string[] = [];
            for (const theme of THEMES) {
                const buf = buffers[theme];
                const outV = theme === "light" ? out.light : out.dark;
                if (!buf) continue;
                writeVariant(outV, buf);
                written.push(outV.fileName);
                manifest[outV.fileName] = {
                    hash: computeHash(project, mode, theme),
                    mode,
                    source:
                        typeof project.link === "string" && project.link.trim().length > 0
                            ? project.link
                            : null,
                    template: TEMPLATE_VERSION,
                    theme,
                };
                manifestDirty = true;
            }

            // Legacy fallback: keep existing base file untouched; for brand-new
            // projects write a dark copy so older consumers still resolve an image.
            if (!existsSync(out.base.absPath)) {
                const darkBuf = buffers.dark;
                if (darkBuf) {
                    writeVariant(out.base, darkBuf);
                    written.push(out.base.fileName);
                    manifest[out.base.fileName] = {
                        hash: computeHash(project, mode, "dark"),
                        mode,
                        source:
                            typeof project.link === "string" && project.link.trim().length > 0
                                ? project.link
                                : null,
                        template: TEMPLATE_VERSION,
                        theme: "dark",
                    };
                    manifestDirty = true;
                }
            }

            if (written.length > 0) {
                const warn = warnings.length
                    ? `  [fallback: ${warnings.join("; ")}]`
                    : "";
                console.log(`${mode}  ${project.title}  ${written.join(", ")}${warn}`);
            } else {
                console.log(`skip (exists)  ${project.title}`);
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
