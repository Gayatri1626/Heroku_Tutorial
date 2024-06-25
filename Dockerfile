# product-service/Dockerfile
FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 6002

CMD ["node", "server.js"]
