# StateWeave Docs

[![Docs image](https://github.com/stateweave/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/stateweave/docs/actions/workflows/ci.yml)

This repo powers [StateWeave.dev](https://stateweave.dev), the documentation site for StateWeave.

StateWeave is a low-level SDK primitive for agent state:

```txt
GraphFrame -> model -> GraphOps -> StateGraph
```

The TypeScript SDK lives in:

```txt
https://github.com/stateweave/sdk-typescript
```

## Environments

| Branch | Environment | URL |
| --- | --- | --- |
| `main` | production | https://stateweave.dev |
| `uat` | uat | https://uat.stateweave.dev |
| `development` | development | https://dev.stateweave.dev |

Deployments are synced through GitHub Actions to Dokploy.

## Local preview

```bash
pnpm install
pnpm docs:dev
```

Open the Mintlify preview URL printed by the command.

## Production container

```bash
docker build -t stateweave-docs .
docker compose up --build
```

The container exports Mintlify docs at build time and serves static output on port `3000`.

## Structure

```txt
docs/
  introduction.mdx
  quickstart.mdx
  concepts/
  guides/
  examples/
  reference/
  docs.json
```

## Contributing

- Keep docs practical and SDK-focused.
- Prefer short pages with runnable TypeScript examples.
- Do not commit API keys, `.env`, private prompts, or generated exports.
- If SDK behavior changes, update the relevant docs page in the same PR or link the SDK PR.

## Security

See [`SECURITY.md`](./SECURITY.md).
