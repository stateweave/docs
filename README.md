# StateWeave Docs

[![Docs image](https://github.com/stateweave/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/stateweave/docs/actions/workflows/ci.yml)

This repo powers [StateWeave.dev](https://stateweave.dev), the documentation site for StateWeave.

StateWeave is a low-level TypeScript SDK for persistent agents with immutable causal graph state:

```txt
immutable causal graph → bounded working context → ordinary model action → causal graph
```

The SDK lives at <https://github.com/stateweave/sdk-typescript>.

## Environments

| Branch | Environment | URL |
| --- | --- | --- |
| `main` | production | https://stateweave.dev |
| `uat` | uat | https://uat.stateweave.dev |
| `development` | development | https://dev.stateweave.dev |

## Local preview

```bash
pnpm install
pnpm docs:dev
```

## Production container

```bash
docker build -t stateweave-docs .
docker compose up --build
```

## Contributing

- Keep docs practical and SDK-focused.
- Use the single public `Agent` class in examples.
- Treat `AgentState` as the public persistence format.
- Do not commit API keys, `.env`, private prompts, or generated exports.

See [`SECURITY.md`](./SECURITY.md).
