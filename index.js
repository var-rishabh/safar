const app = require('./app')
const connectWithDb = require('./config/db')
require('dotenv').config()

connectWithDb();

const httpServer = app.listen(process.env.PORT, () => {
    console.log(`Server is running at port:${process.env.PORT}`)
})
// chat by socket.io
const http = require('http').Server(app);
const { Server } = require("socket.io");
const io = new Server(httpServer);
io.on('connection', (socket) => {
    console.log('socket io connected!');
    socket.on('welcome', username => {
        if (username == "SAFAR") {
            socket.broadcast.emit('chat message', { message: "Welcome To SAFAR's  ChatBot! How can I help you ?", username: username });
        }
    });
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

