# ========================================================
# Stage 1: Dependencies
# ========================================================
FROM node:22-slim AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Cache the npm registry folder to avoid downloading packages from scratch
RUN --mount=type=cache,target=/root/.npm \
    npm ci --legacy-peer-deps

# ========================================================
# Stage 2: Build
# ========================================================
FROM node:22-slim AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

# Node optimizations to prevent out-of-memory crashes on cheap VPS plans
ENV NODE_OPTIONS="--max-old-space-size=2048"

# Cache the Next.js compiler artifacts (.next/cache) between builds.
# This prevents Next.js from recompiling unchanged pages and components.
RUN --mount=type=cache,target=/app/.next/cache \
    npm run build

# ========================================================
# Stage 3: Production Runtime
# ========================================================
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Setup secure system user
RUN groupadd --system nodejs \
    && useradd --system --gid nodejs nextjs

# Notice: 'npm ci' is completely gone from this stage! 
# Next.js standalone automatically bundles only the absolute necessary files.

# Copy standalone build, static assets, and public files with correct permissions
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

# Run directly via Node binary for lightning-fast startups and 0% idling CPU overhead
CMD ["node", "server.js"]
