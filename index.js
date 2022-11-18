const app = require('./app')
const connectWithDb = require('./config/db')
require('dotenv').config()

connectWithDb();

// chat by socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
io.on('connection', (socket) => {
    console.log('socket io connected!');
    
    socket.on("typing", (name) => {
        socket.broadcast.emit("typing", name);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('send-chat-message', (message, username) => {
        console.log(`${username} : ${message}`);
        socket.broadcast.emit('chat message', { username: username, message: message });
    })
});

server.listen(process.env.PORT, () => {
    console.log(`Server is running at port:${process.env.PORT}`)
})