const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = 3000;
const userConnected = 'User connected!';

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log(userConnected);
    socket.emit('message', userConnected);
});

http.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});