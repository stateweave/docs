# Contributing to StateWeave Docs

Docs should help developers understand and use the StateWeave primitive quickly:

```txt
GraphFrame -> GraphOps -> StateGraph
```

## Local setup

```bash
pnpm install
pnpm docs:dev
```

## Pull requests

Use this structure:

```md
## Summary
What changed and why?

## Pages changed
List the docs pages touched.

## Verification
- [ ] Ran `pnpm docs:dev`, or
- [ ] Built the docs container with `docker build -t stateweave-docs .`

## Security/privacy
- [ ] No API keys, `.env`, private prompts, or generated exports committed
```

## Style

- Use clear TypeScript examples.
- Keep pages concise.
- Explain what goes into the model and what comes out.
- Prefer diagrams or Mermaid snippets when explaining graph state.
- Link to the SDK repo for source-level details.
