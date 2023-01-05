FROM node:16.16.0 as base

# add package.json and install dependencies
COPY package*.json ./
COPY scripts/dev.sh ./scripts/dev.sh

RUN npm install

# copy source code
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY openapi.json ./openapi.json

# build
RUN npm run build

# production stage
FROM node:16.16.0-alpine as production

# copy build files
COPY --from=base ./node_modules ./node_modules
COPY --from=base ./dist ./dist

# expose port
EXPOSE 4000
# start app with nodemon
# CMD ["node", "dist/index.js"]
# CMD ["tsc && concurrently \"tsc -w\" \"nodemon dist/server.js\"" ]
