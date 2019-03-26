
const _ = require('lodash');

let admin = null;
let users = [];

exports.ADMIN_USERNAME = 'ADMIN';

exports.getAdmin = () => {
    return admin;
}

exports.getUsers = () => {
    return users;
}

exports.registerAdmin = (socket, userName) => {
    admin = {
        name: userName,
        socket: socket    
    }
    console.log(`admin registered`);
}

exports.registerUser = (socket, userName) => {
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

exports.unregsiterAdmin = (socket) => {
    admin = null;
    console.log(`admin unregistered`);
}

exports.unregisterUser = (socket) => {
    let user = _.find(users, (u) => {
        return socket.id === u.socket.id;
    });
    if (user) {
        users = _.remove(users, (u) => {
            return u.socket.id === socket.id;
        });
        console.log(`user ${user.name} unregistered`);
        console.log(`Number of registered users: ${users.length}`);
    }    
}
