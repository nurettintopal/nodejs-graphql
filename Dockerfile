FROM node:12.14.1-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 80

CMD ["node", "build/main.js"]
