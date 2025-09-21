# AGENTS.md

> A short guide for AI coding agents working in this repository. Keep it current and specific. Humans: see README.md for contributor docs.

## Project Overview
- Purpose: <!-- one line summary -->
- Primary stack: <!-- e.g., Node 20 + PNPM, Python 3.11, Go 1.22 -->
- App type: <!-- e.g., Next.js web app + REST API + Postgres -->
- Monorepo?: <!-- yes/no; if yes, list packages and key paths -->

## Golden Commands (copy-paste)
- Install deps: `pnpm install`  <!-- or: npm ci / poetry install / pipx run uv sync -->
- Format: `pnpm fmt`            <!-- e.g., biome/prettier/black -->
- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck`
- Unit tests: `pnpm test`
- Integration tests: `pnpm test:integration`
- Start dev server: `pnpm dev`
- Build: `pnpm build`
- Start prod: `pnpm start`

> If any command fails, STOP and report the error and logs in your task output.

## Repository Conventions
- Language/style:
  - JS/TS: ESLint + Biome/Prettier; Python: Ruff + Black; Go: `gofmt` + `golangci-lint`.  
  - Follow the config files in the repo (e.g., `.eslintrc.*`, `ruff.toml`, `biome.json`).
- Architecture:
  - Keep modules cohesive; do not create new top-level packages unless requested.
  - Prefer small, testable units; add/extend tests for new code.
- Dependencies:
  - Add the smallest, well-maintained lib that solves the problem.
  - Justify any new dependency in the PR description (size, purpose, security posture).
  - Run `pnpm audit` (or equivalent) and surface findings.

## Branching & PR Policy (IMPORTANT)
- **Never commit directly to `main`.**
- **Always do work on a new feature branch**: `feature/<short-kebab-summary>` (e.g., `feature/add-user-search`).
- After implementing and passing checks, **open a Pull Request** from the feature branch to `main`.
- PR must include:
  - Summary of changes and rationale
  - Risk/impact notes and rollout considerations
  - Validation steps (manual + automated)
  - Screenshots or logs if UI or DX changes
- Keep diffs small and focused. If scope creeps, open follow-up PRs.

## Testing Requirements
- Minimum cove
