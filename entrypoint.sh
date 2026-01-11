#!/bin/sh
set -e

npm run build

cp -r /app/.next/standalone/* /app/

export NODE_ENV=production

node server.js
