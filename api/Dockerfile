FROM node:12.16.1-alpine3.11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN yarn install --silent

COPY . /usr/src/app

EXPOSE 3001:3001

CMD ["yarn", "start"]
