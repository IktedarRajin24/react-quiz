FROM node:18.18.2-alpine as BASE
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm install --silent

AGR NODE_ENV
RUN npm run build:$NODE_ENV
