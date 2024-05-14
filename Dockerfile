FROM node:latest AS node-builder
WORKDIR /App-Socket-Angular/socketApp 

COPY socketApp/ /App-Socket-Angular/socketApp/

RUN npm install --force

RUN npm run build --prod

WORKDIR /App-Socket-Angular/serverNode

COPY serverNode/package*.json /App-Socket-Angular/serverNode/
RUN npm install

COPY serverNode/ /App-Socket-Angular/serverNode/

FROM nginx:1.17.1-alpine
RUN apk add --update nodejs npm
COPY --from=node-builder /App-Socket-Angular/socketApp/dist/socket-app/browser /usr/share/nginx/html
COPY --from=node-builder /App-Socket-Angular/serverNode/ /App-Socket-Angular/serverNode

CMD ["sh", "-c", "node /App-Socket-Angular/serverNode/index.js & nginx -g 'daemon off;'"]

EXPOSE 80
EXPOSE 4000
