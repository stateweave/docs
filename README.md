# StateWeave Docs

Mintlify documentation for [StateWeave.dev](https://stateweave.dev).

## Local preview

```bash
pnpm docs:dev
```

## Production container

```bash
docker build -t stateweave-docs .
docker compose up --build
```

The container exports Mintlify docs at build time and serves static output on port `3000`.

## Security

Do not commit `.env`, provider keys, private prompts, or generated trace files.
