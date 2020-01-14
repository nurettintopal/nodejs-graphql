FROM node:12.14.1-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 4000

CMD ["node", "build/main.js"]
