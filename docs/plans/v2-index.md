# Docs V2 work index

Production is temporarily a video-only coming-soon page. `yarn start` exposes the full documentation from `docs/` with the sidebar and existing CSS. `docusaurus.config.js` enables docs only when `NODE_ENV` is `development`; production enables the placeholder in `src/pages/index.jsx` instead. Blog remains disabled in both modes. New styling is deferred by request. This state is local and has not been published.

## Open PR snapshot — 2026-09-07

| PR | Branch → base | Scope observed in changed-file list | Next action |
| --- | --- | --- | --- |
| [#76 Move old Docs to Legacy tab](https://github.com/ShenaniganDApp/docs/pull/76) | `legacy-docs` → `master` | 17 legacy documents and `sidebars.js` | Review legacy route and sidebar strategy. |
| [#77 About V2](https://github.com/ShenaniganDApp/docs/pull/77) | `about-v2` → `legacy-docs` | New `about-v2.md`, `home-v2.md`, updates to home and sidebar | Review after #76; confirm current product wording. |
| [#78 PRTCLE predictions](https://github.com/ShenaniganDApp/docs/pull/78) | `prtcle-predictions` → `about-v2` | Adds `particle-predictions-v2.md`, updates V2 pages and sidebar | Review after #77; verify feature claims. |
| [#81 She lore](https://github.com/ShenaniganDApp/docs/pull/81) | `she-lore` → `master` | 25 files, including legacy changes, V2 pages, predictions, lore, config and sidebar | Compare ancestry and diffs with #76–78 before choosing an integration path. |
| [#82 Bump semver from 5.7.1 to 5.7.2](https://github.com/ShenaniganDApp/docs/pull/82) | `dependabot/npm_and_yarn/semver-5.7.2` → `master` | Dependency maintenance | Reassess against the locally refreshed lockfile; do not merge blindly. |

The index is based on live PR metadata and file lists, not a completed code or editorial review. PRs date from 2023; their product claims require confirmation. No PR was merged, closed, rebased, or edited.

## Work sequence

1. Review and commit the pending dependency upgrade and temporary landing change as appropriate. Publish the placeholder through the actual hosting workflow, replacing old generated output rather than overlaying it.
2. Compare #81 against the #76 → #77 → #78 chain and choose one integration strategy. Preserve the Docusaurus 3 / React 19 migration and temporary hidden state during integration.
3. Inventory V2 topics: welcome, about, predictions, lore, legacy reference. Confirm product accuracy, ownership, route names, and navigation. Review the remaining legacy content before deciding whether it belongs in V2.
4. Resolve known legacy broken links: `/docs/contribution-guide`, `./na`, `.//she-nft#market-place`, and `./tokenomics#weekly-distrubution` before restoring docs.
5. Implement styling in a separate pass after direction is agreed.
6. At V2 release, enable docs in production deliberately and remove or move `src/pages/index.jsx` before assigning a docs page to `/`. Preserve the `plans/**` exclusion. Development already exposes docs at `/`; the pages plugin is disabled there to avoid a route collision.

## Acceptance

- Temporary state: clean production build contains the coming-soon homepage and 404 page, with no generated documentation routes or blog.
- Development state: `yarn start` serves the docs homepage, sidebar, and document routes; the placeholder is absent.
- V2 release: frozen-lockfile install and build pass; approved content renders; navigation, anchors, responsive layout, and browser console are checked.
- Publish verification: production homepage shows the intended state and old URLs do not serve stale pages. Hosting provider and deployment mechanism still need verification.

## Boundaries

The disabled workflow in `.github/workflows/documentation.yml` is not evidence of an active deployment path. No push, merge, or deployment has been performed. Public images in `static/` remain accessible; this change hides rendered docs, not repository history or source assets.
