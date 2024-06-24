FROM node:20-alpine

WORKDIR /app

RUN rm -fr node_modules 

COPY package*.json ./

RUN npm install

COPY ./src ./src

COPY ./public ./public

EXPOSE 3000

CMD [ "node", "./src/server.js" ]
