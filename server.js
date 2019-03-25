
const port = 4242;
const express = require('express');
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
    res,send('Hi from server');
});

console.log('--------------------------------------------------------------------------------');
console.log(`server listening on port ${port}`);
server = app.listen(port);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('client connected');

    socket.on('client-msg', (data) => {
        console.log(`message from client: ${data.msg}`);
        socket.emit('server-msg', {msg: 'OK'});
    });
});
