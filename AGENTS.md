# AGENTS.md

Personal portfolio site for Ruben Pombo (Data Engineer). Static HTML/CSS/JS — no build step.

**Live:** https://rubenpombo.github.io/web/ (GitHub Pages from `main`)

**Stack:** HTML5, Tailwind CSS (CDN), vanilla JS, particles.js, Lucide icons.

## Visual inspection

Default path when asked how the site looks:

1. **Read the source** — `index.html`, `css/style.css`, `js/*.js`.
2. **Lavish Editor (local)** — open the working tree in a real browser for layout and annotation:
   ```sh
   npx -y lavish-axi index.html
   npx -y lavish-axi poll index.html
   ```
   Local files match what deploys to GitHub Pages.

When HTML/source review is not enough — e.g. rendered layout on the live URL, multiple viewports, screenshots, or accessibility snapshots — **optionally** use the **Playwright MCP** server (`.cursor/mcp.json`). Navigate to https://rubenpombo.github.io/web/ or a local `http://localhost` URL and inspect what actually renders.

## Improvements

When asked to improve, redesign, or explore changes, read and follow the **lavish** skill (`~/.cursor/skills/lavish/SKILL.md`):

- Match this project's Tailwind styling and existing design tokens before falling back to `npx -y lavish-axi design`.
- Put review artifacts in `.lavish/` and open them with `npx -y lavish-axi`.
- Use playbooks (`plan`, `comparison`, etc.) when the proposal fits.

Apply approved changes to the repo files; keep the site deployable as static files on GitHub Pages.
