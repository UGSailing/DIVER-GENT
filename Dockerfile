FROM docker.io/library/node:24-alpine

# See https://github.com/nodejs/docker-node/tree/b4117f9333#nodealpine
RUN apk add --no-cache libc6-compat curl

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

CMD ["/bin/sh", "entrypoint.sh"]
