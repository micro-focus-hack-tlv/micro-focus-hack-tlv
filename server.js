
const port = 4242;
const express = require('express');
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
    res,send('Hi from server');
});

console.log(`--------------------------------------------------------------------------------`);
console.log(`server listening on port ${port}...`);
server = app.listen(port);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log(`client connected`);
        
    socket.on('client-msg-user-name', (data) => {
        console.log(`user "${data.userName}" registered`);
        socket.emit('server-msg', {
            msg: `Hello ${data.userName}`
        });
    });

    socket.on('client-msg', (data) => {
        console.log(`got message from client: ${data.msg}`);
    });
});
