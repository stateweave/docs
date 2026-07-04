# syntax=docker/dockerfile:1
FROM node:22-bookworm-slim AS docs-export

WORKDIR /app/docs
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates unzip \
  && rm -rf /var/lib/apt/lists/*

COPY docs/ ./
RUN npx --yes mintlify@4.2.667 export --output /tmp/stateweave-docs.zip \
  && mkdir -p /export \
  && unzip -q /tmp/stateweave-docs.zip -d /export \
  && sed -i '/openInBrowser(url);/d' /export/serve.js

FROM node:22-alpine AS runtime

ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /app

COPY --from=docs-export --chown=node:node /export ./

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/introduction').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "serve.js"]
