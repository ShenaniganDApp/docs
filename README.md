# wiki

Shenanigan wiki

## Current state

Production builds temporarily display a plain coming-soon page while Docs V2 is in development.
Run `yarn start` to work on the full docs with their sidebar and existing styling.
Run `yarn build` and `yarn serve` to preview the production placeholder. Documentation
routes are excluded from production output; blog generation stays disabled in both modes.
See [the V2 work index](docs/plans/v2-index.md) for open PRs, the restoration plan,
and publishing checks. The placeholder is defined in `src/pages/index.md`.

## Info

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Installation

Requires Node.js 20 or newer and Yarn Classic 1.22.22. Verified with Node.js
20.20.2. No OpenSSL compatibility flags are needed.

```console
yarn install --frozen-lockfile
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

For a local server without opening a browser, or when port 3000 is occupied:

```console
yarn start --no-open --host 127.0.0.1 --port 3107
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
