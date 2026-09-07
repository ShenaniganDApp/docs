# Dependency Upgrade Implementation Plan

**Goal:** All direct dependencies use their latest stable registry releases.
**Scope:** Dependency manifest, lockfile, Babel and Docusaurus configuration, and required Markdown migration fixes.
**Non-goals:** Deployment and unrelated documentation rewrites.
**Risks:** Major Docusaurus, React, and MDX upgrades can change compilation and rendering.

## Task 1: Upgrade dependencies (low risk)

Update `package.json`, `yarn.lock`, `babel.config.js`, and setup instructions in `README.md`. Remove the legacy OpenSSL flag. Run `yarn install` and verify the resolved versions against npm's stable tags.

## Task 2: Migrate configuration and content (low risk)

Run `yarn build` to identify incompatibilities. Apply required changes to `docusaurus.config.js` and affected Markdown files. Keep content meaning intact. Repeat until the production build passes.

## Task 3: Verify readiness (low risk)

After Task 2, run `yarn install --frozen-lockfile`, `yarn build`, and `yarn start --no-open --host 127.0.0.1 --port 3107`. Verify page delivery, browser rendering, and file-watch recompilation. Run `git diff --check` and report remaining warnings.

## Verification outcome

All direct dependencies were upgraded to stable registry releases, and transitive dependencies were refreshed within supported ranges. Frozen-lockfile installation and production compilation passed on Node.js 20.20.2. Browser checks verified homepage rendering and navigation to About. File-watch recompilation passed. React's DOM-property warning required changing `class` to `className` in two MDX paragraphs. Existing broken documentation links and upstream peer-dependency warnings remain.
