# Stage 1: Build
FROM node:22-alpine as builder

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm ci

EXPOSE 3000
CMD ["npm", "start"]