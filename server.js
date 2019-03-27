
const _ = require('lodash');
const port = 4242;
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

let clientsMgr = require('./server-clients-mgr.js');

sendMsgToAdmin = (data) => {
    if (clientsMgr.getAdmin() !== null) {
        console.log(`sending msg "${data.msg}" to admin...`);
        clientsMgr.getAdmin().socket.emit('server-msg', data);
    } else {
        console.log(`No admin`);
    }
}

let sendMsgToAllMobiles = (socket, data) => {
    console.log(`sending msg "${data.msg}" to all mobiles...`);
    socket.broadcast.emit('server-msg', data);
}

io.on('connection', (socket) => {
    console.log(`socket ${socket.id} connected`);

    socket.on('client-msg-register-user', (data) => {
        if (data.userName === clientsMgr.ADMIN_USERNAME) {
            clientsMgr.registerAdmin(socket, data.userName);
        }
        else {
            clientsMgr.registerUser(socket, data.userName);            
        }
    });

    socket.on('disconnect', () => {
        if (clientsMgr.getAdmin() !== null && socket.id === clientsMgr.getAdmin().socket.id) {
            clientsMgr.unregsiterAdmin(socket);
        } else {
            clientsMgr.unregisterUser(socket);          
        }
    });    

    socket.on('admin-msg', (data) => {
        console.log(`got message "${data.msg}" from admin`);
        sendMsgToAllMobiles(socket, data);
    });

    socket.on('mobile-msg', (data) => {
        console.log(`got message "${data.msg}" from mobile`);
        sendMsgToAdmin(data);
    });
});
