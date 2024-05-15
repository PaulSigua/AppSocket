# Utilizamos la ultima version del node
FROM node:latest AS node-builder

#Creamos una carpeta para almacenar el proyecto angular
WORKDIR /App-Socket-Angular/socketApp 

#Copiamos la informacion del angular
COPY socketApp/ /App-Socket-Angular/socketApp/

# Instalamos el proyecto
RUN npm install --force

# Ejecutamos el proyecto
RUN npm run build --prod

# Creamos una carpeta para almacenar el servidor
WORKDIR /App-Socket-Angular/serverNode

# Copiamos la informacion del servidor socket.io
COPY serverNode/package*.json /App-Socket-Angular/serverNode/

# Lo ejecutamos
RUN npm install

# Copiamos nuevamente la informacion nueva
COPY serverNode/ /App-Socket-Angular/serverNode/

# Obtenemos el ngix
FROM nginx:1.17.1-alpine

# Ejecutamos la instalacion del node
RUN apk add --update nodejs npm

#Copiamos la informacion del proyecto angular y el servidor
COPY --from=node-builder /App-Socket-Angular/socketApp/dist/socket-app/browser /usr/share/nginx/html
COPY --from=node-builder /App-Socket-Angular/serverNode/ /App-Socket-Angular/serverNode

# Ejecutamos el servidor
CMD ["sh", "-c", "node /App-Socket-Angular/serverNode/index.js & nginx -g 'daemon off;'"]

# Puertos para exponer el proyecto angular y el servidor socket.io
EXPOSE 80
EXPOSE 4000
