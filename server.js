
const _ = require('lodash');
const port = 4242;
const adminUserName = 'ADMIN';
const express = require('express');
const app = express();
let admin = null;
let users = [];
app.use(express.static('client'));
app.get('/', (req, res) => {
    res,send('Hi from server');
});
console.log(`--------------------------------------------------------------------------------`);
console.log(`server listening on port ${port}...`);
server = app.listen(port);
const io = require('socket.io')(server);

function registerAdmin(socket, userName) {
    admin = {
        name: userName,
        socket: socket    
    }
    console.log(`admin registered`);
}

function registerUser(socket, userName) {
    let isNewUser = _.findIndex(users, {name: userName}) === -1;        
    if (isNewUser) {
        users.push({
            name: userName,
            socket: socket
        });
        console.log(`user "${userName}" registered`);
        socket.emit('server-msg-user-registered', {});
    }
    else {
        console.log(`user "${userName}" already registered`);
    }
    console.log(`Number of users registered: ${users.length}`); 
}

function unregsiterAdmin(socket) {
    admin = null;
    console.log(`admin unregistered`);
}

function unregisterUser(socket) {
    let user = _.find(users, (u) => {
        return socket.id === u.socket.id;
    });
    if (user) {
        users = _.remove(users, (u) => {
            u.socket.id === socket.id;
        });
        console.log(`user ${user.name} unregistered`);
        console.log(`Number of registered users: ${users.length}`);
    }    
}

io.on('connection', (socket) => {
    console.log(`socket ${socket.id} connected`);

    socket.on('client-msg-register-user', (data) => {
        if (data.userName === adminUserName) {
            registerAdmin(socket, data.userName);
        }
        else {
            registerUser(socket, data.userName);
        }
    });

    socket.on('disconnect', () => {
        if (admin !== null && socket.id === admin.socket.id) {
            unregsiterAdmin(socket);
        } else {
            unregisterUser(socket);          
        }
    });    

    socket.on('client-msg', (data) => {
        console.log(`got message from client: ${data.msg}`);
    });
});
