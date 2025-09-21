# AGENTS.md

> Guide for AI agents working in this repository: Frame Rate (FPS) Visualizer

---

## Project Overview
- Name: **Frame Rate (FPS) Visualizer**
- Purpose: Show side-by-side visual comparisons of object motions at varying frame rates (24, 30, 60, 120 FPS), plus an interactive control to adjust FPS in real time.
- Stack / Tech:  
  - HTML5 + CSS3 (Grid, Media Queries)  
  - Vanilla JavaScript (ES6+)  
  - GSAP for animation ticker  
- Layout & Responsiveness: Desktop shows five-box grid, mobile stacks in one column.

---

## Useful / Golden Commands
These are commands or tasks agents should run to verify correctness, style, etc.

- Format code (if using a formatter): *no default—use consistent spacing, semicolons, indentation (2 or 4 spaces; follow existing).*
- Lint checks: similar to formatting rules; flag unused variables, enforce strict mode.
- Run animations manually (in browser) to check for smoothness and consistent behavior across FPS settings.
- Open **index.html** in a modern browser to test locally.
- Validate responsiveness (e.g. via browser dev tools) to ensure layout stacks correctly on narrow viewports.

---

## File / Folder Structure
- Root directory has `index.html`, plus related JS/CSS and assets.
- CSS (styles) files—mostly custom, no framework.
- JS logic in separate JS file(s), likely `app.js` or similar.
- GSAP import is used for the animation ticker.
- No build system or bundler is assumed (unless added later).

---

## Coding Style & Conventions
- Use **ES6+**: let/const, arrow functions, template strings.
- Modular, small functions: separate logic where possible (e.g. FPS control logic separate from animation render).
- Clear, descriptive variable/function names.
- Avoid hardcoding values like colors or layout metrics unless necessary; reuse CSS variables if present.
- Keep animation logic performant: avoid expensive DOM queries inside animation frames; use requestAnimationFrame or GSAP ticker properly.

---

## Branching & PR Policy (for Codex + human agents)
- **Never commit directly to `main`.**
- For any new feature, bug fix, or change: create a new feature branch, name it `feature/<short-kebab-summary>` (e.g. `feature/change-fps-control-style`).
- In prompts to the agent: explicitly say work on the feature branch, do not modify `main`.
- After the change is complete, open a Pull Request from that feature branch → `main`.
- PR should include:
  - What was changed + why
  - How to test (what commands / browser steps)
  - Impact notes (e.g. changes in performance, layout, compatibility)

---

## Validation & Testing Requirements
- Visual test: compare animations at baseline FPS (e.g. 24, 30, 60, 120) and ensure they move at same speed, smoothness differences are clear.
- Responsiveness test: mobile vs desktop. Layout should adapt (grid → stack).
- Manual interaction test: slider / number input to control central animation FPS.
- Cross-browser check: at least in Chrome and Firefox; check that timing (GSAP ticker) behaves consistently.
- CSS/JS linting: no errors; syntax clean.

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