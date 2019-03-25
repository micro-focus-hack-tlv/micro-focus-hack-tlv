
const _ = require('lodash');
const port = 4242;
const express = require('express');
const app = express();
const users = [];

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
        let userName = data.userName;
        let isNewUser = _.findIndex(users, {name: userName}) === -1;
        if (isNewUser) {
            let userId = 1000000 + Math.floor(Math.random() * 1000000);
            users.push({
                id: userId,
                name: userName
            });
            console.log(`user "${userName}" added with id ${userId}`);
            socket.emit('server-msg-user-id', {
                userId: userId
            });            
        }
        else {
            console.log(`user "${userName}" already exists`);
        }
        console.log(`Number of users registered: ${users.length}`);
    });

    socket.on('client-msg', (data) => {
        console.log(`got message from client: ${data.msg}`);
    });
});
