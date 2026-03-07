# ============================================
# Stage 1: Build the Vite app
# ============================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --frozen-lockfile || npm install

# Copy source code
COPY . .

# Build the app (tsc + vite build)
RUN npm run build

# ============================================
# Stage 2: Serve with Nginx + CORS Proxy
# ============================================
FROM node:22-alpine AS production

# Install nginx and supervisor
RUN apk add --no-cache nginx supervisor

WORKDIR /app

# Copy built assets to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy CORS proxy
COPY scripts/cors-proxy.js /app/cors-proxy.js
COPY package.json /app/package.json

# Create supervisor config
RUN mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisord.conf

# Create nginx cache/log directories
RUN mkdir -p /var/cache/nginx /var/log/nginx /run/nginx

EXPOSE 80 8888

CMD ["supervisord", "-c", "/etc/supervisord.conf"]
