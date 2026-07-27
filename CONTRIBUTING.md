# Contributing to StateWeave Docs

Docs should explain the public StateWeave primitive accurately:

```txt
immutable causal graph → bounded working context → ordinary model action → causal graph
```

## Local setup

```bash
pnpm install
pnpm docs:dev
```

## Pull requests

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

- Use the single public `Agent` class.
- Use `AgentState` for persistence examples.
- Explain compiled causal context and ordinary model actions clearly.
- Keep pages concise and TypeScript examples runnable.
- Link to the SDK repository for source-level details.
