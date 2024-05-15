// Creacion del servidor socket.io

// Creacion de constantes
const { Server } = require('socket.io');
const http = require('http');

// Inicializacion del servidor
const serverHttp = http.createServer();
const io = new Server(serverHttp, {cors: {origin: ['http://localhost', 'http://localhost:4200']}});

// Conexion
io.on('connection', (socket) => {
    console.log('connected');
    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('received', {data: data, message: 'Esta es una prueba desde el servidor'});
    })
})

// Se establece el puerto del servidor
serverHttp.listen(4000, () => {
    console.log('Servidor de socket.io escuchando en el puerto 4000');
});