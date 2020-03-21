FROM node:12.16.1

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN ls

EXPOSE 3000

CMD ["yarn", "start"]