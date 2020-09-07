## Stage 1 for building node based application
FROM node:12.16.1-alpine

WORKDIR /app

EXPOSE 8080
COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
