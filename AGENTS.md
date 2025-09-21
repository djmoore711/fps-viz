# AGENTS.md

> Guide for AI agents working in this repository: Frame Rate (FPS) Visualizer

---

## Project Overview
- Name: **Frame Rate (FPS) Visualizer**
- Purpose: Show side-by-side visual comparisons of object motions at varying frame rates (24, 30, 60, 120 FPS), plus an interactive control to adjust FPS in real time.
- Stack / Tech:  
  - HTML5
  - Pico.css (via CDN)
  - Custom CSS3 for layout (Grid, Media Queries)
  - Vanilla JavaScript (ES6+)  
  - GSAP for animation ticker  
- Layout & Responsiveness: Desktop shows five-box grid, mobile stacks in one column. UI is styled with Pico.css and supports light/dark themes.

---

## Useful / Golden Commands
These are commands or tasks agents should run to verify correctness, style, etc.

- Open **index.html** in a modern browser to test locally.
- Run animations manually (in browser) to check for smoothness and consistent behavior across FPS settings.
- **Test the theme toggle** to ensure light/dark modes work and persist.
- Validate responsiveness (e.g. via browser dev tools) to ensure layout stacks correctly on narrow viewports.

---

## File / Folder Structure
- `index.html`: Contains all HTML, custom CSS in a `<style>` block, and the core animation script.
- `script.js`: Contains the theme-switching logic.
- GSAP import is used for the animation ticker.
- No build system or bundler is assumed (unless added later).

---

## Coding Style & Conventions
- **Leverage Pico.css:** Use Pico's default styles for elements wherever possible.
- **Minimal Custom CSS:** Custom CSS in the `<style>` block should be for layout purposes (e.g., the canvas grid) that Pico doesn't handle, not for basic component styling.
- **Use CSS Variables:** When overriding styles or in custom CSS, use Pico's CSS variables (e.g., `var(--primary)`) for consistency with the theme.
- **Modular JavaScript:** Keep the theme-switching logic in `script.js` separate from the animation logic in `index.html`.

---

## Branching & PR Policy (for Codex + human agents)
- **Never commit directly to `main`.**
- For any new feature, bug fix, or change: create a new feature branch, name it `feature/<short-kebab-summary>` (e.g., `feature/change-fps-control-style`).
- In prompts to the agent: explicitly say work on the feature branch, do not modify `main`.
- After the change is complete, open a Pull Request from that feature branch → `main`.
- PR should include:
  - What was changed + why
  - How to test (what commands / browser steps)
  - Impact notes (e.g. changes in performance, layout, compatibility)

---

## Validation & Testing Requirements
- **Visual Test:** Compare animations at baseline FPS. Verify that both light and dark themes render correctly and that colors update as expected.
- **Responsiveness Test:** Mobile vs desktop. Layout should adapt (grid → stack).
- **Functional Test:**
  - The FPS slider and input should work correctly.
  - The theme toggle buttons must switch themes and persist the choice in `localStorage`.
- **Cross-browser check:** At least in Chrome and Firefox.

---

## Agent Task Protocol
When Codex (or another AI agent) works here:

1. Read `AGENTS.md` + `README.md`. Understand the project goal: visualizing motion smoothness by varying frame rates.

2. Confirm you are working on a **feature branch** (if not, create it first).

3. Make small, incremental changes. After each change:
   - Ensure formatting and lint rules are respected.
   - Manually or via quick browser render, check animations work and layout responds to viewport size.
   - Commit with clear message (feature: <short description>).

4. Before finalizing and opening PR:
   - Run all validation steps (visual, responsiveness, behavior).
   - Include test results or screenshots if UI changes or behavior changes.

5. Prepare PR description: summary, testing steps, impact (UI / performance / compatibility).

---

## Permissions & Safety / Do-Not Touchs
- Do not modify `main` directly.
- Do not delete or rewrite unrelated files (e.g. asset files, existing CSS unless part of requested change).
- Do not pull in heavy external dependencies unless requested and justified (size / impact).
- Do not hardcode secrets or external URLs (unless absolutely necessary for the feature).  

---

_Last updated: YYYY-MM-DD_