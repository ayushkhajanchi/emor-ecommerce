## Stage 1 for building node based application
FROM node:12.16.1-alpine As builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod


## Stage 2 for transfering build into nginx
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html