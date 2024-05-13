const { Server } = require('socket.io');

const server = new Server();

server.on('connection', (socket) => {
    console.log('connected');
})

server.listen(4000);