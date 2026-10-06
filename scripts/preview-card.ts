/**
 * Branded preview-card template for projects without a screenshot-able link
 * (or marked comingSoon). Rendered inline via Playwright setContent.
 * Supports light and dark themes so the portfolio can respect prefers-color-scheme.
 */

export const CARD_WIDTH = 1200;
export const CARD_HEIGHT = 600;

export type CardTheme = "light" | "dark";

export interface CardTag {
    name: string;
    class?: string;
}

export interface CardInput {
    title: string;
    description: string;
    tags: CardTag[];
    comingSoon?: boolean;
    theme?: CardTheme;
}

const FALLBACK_TAG_BG = "#582f82";
const FALLBACK_TAG_TEXT = "#ffffff";

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Parse a Tailwind-ish class string into concrete hex colors.
 * Supports `bg-[#hex]` / `text-[#hex]` and `text-white` / `text-black`.
 * Falls back to portfolio-purple bg + white text.
 */
export function parseTagColors(twClass?: string): { bg: string; text: string } {
    const bgHex = twClass?.match(/bg-\[#([0-9a-fA-F]{3,8})\]/)?.[1];
    const textHex = twClass?.match(/text-\[#([0-9a-fA-F]{3,8})\]/)?.[1];

    let text: string | undefined;
    if (textHex) {
        text = `#${textHex}`;
    } else if (/\btext-white\b/.test(twClass ?? "")) {
        text = "#ffffff";
    } else if (/\btext-black\b/.test(twClass ?? "")) {
        text = "#000000";
    }

    return {
        bg: bgHex ? `#${bgHex}` : FALLBACK_TAG_BG,
        text: text ?? FALLBACK_TAG_TEXT,
    };
}

export function buildCardHtml(input: CardInput): string {
    const theme: CardTheme = input.theme === "light" ? "light" : "dark";
    const title = escapeHtml(input.title);
    const description = escapeHtml(input.description);

    const tagPills = input.tags
        .map((tag) => {
            const { bg, text } = parseTagColors(tag.class);
            return `<span class="tag" style="background:${bg};color:${text}">${escapeHtml(tag.name)}</span>`;
        })
        .join("");

    const badge = input.comingSoon
        ? `<div class="badge">Coming soon</div>`
        : "";

    const palette =
        theme === "light"
            ? `
    background: #f8fafc;
    color: #0f172a;`
            : `
    background: #0f172a;
    color: #ffffff;`;

    const glow =
        theme === "light"
            ? "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(120, 119, 198, 0.28), transparent 65%)"
            : "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(120, 119, 198, 0.35), transparent 65%)";

    const titleColor = theme === "light" ? "#0f172a" : "#ffffff";
    const descColor = theme === "light" ? "#64748b" : "#94a3b8";
    const footerColor = theme === "light" ? "#94a3b8" : "#64748b";
    const badgeBg =
        theme === "light"
            ? "rgba(15, 23, 42, 0.06)"
            : "rgba(148, 163, 184, 0.12)";
    const badgeBorder =
        theme === "light"
            ? "rgba(15, 23, 42, 0.12)"
            : "rgba(148, 163, 184, 0.28)";
    const badgeColor = theme === "light" ? "#475569" : "#94a3b8";

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${CARD_WIDTH}px; height: ${CARD_HEIGHT}px; overflow: hidden; }
  body {
    position: relative;${palette}
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .glow {
    position: absolute;
    inset: 0;
    background: ${glow};
    pointer-events: none;
  }
  .content {
    position: relative;
    z-index: 1;
    height: 100%;
    padding: 64px 72px 80px;
    display: flex;
    flex-direction: column;
  }
  .title {
    color: ${titleColor};
    font-size: 56px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    max-width: 900px;
  }
  .description {
    margin-top: 24px;
    color: ${descColor};
    font-size: 22px;
    line-height: 1.55;
    max-width: 920px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .tags {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .tag {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }
  .badge {
    position: absolute;
    top: 28px;
    right: 36px;
    z-index: 2;
    padding: 8px 14px;
    border-radius: 999px;
    background: ${badgeBg};
    border: 1px solid ${badgeBorder};
    color: ${badgeColor};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .footer {
    position: absolute;
    left: 72px;
    bottom: 28px;
    color: ${footerColor};
    font-size: 14px;
    font-weight: 500;
  }
</style>
</head>
<body>
  <div class="glow"></div>
  ${badge}
  <div class="content">
    <div class="title">${title}</div>
    <div class="description">${description}</div>
    <div class="tags">${tagPills}</div>
  </div>
  <div class="footer">Shinigamy19 — Portfolio</div>
</body>
</html>`;
}
