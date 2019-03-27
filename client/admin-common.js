
let userNames = [];

console.log('admin-common.js');

registerAdmin = (onServerMsgCallback, onUserListUpdateCallback) => {
    connectToServer('ADMIN');
    
    socket.on('server-msg', (data) => {
        console.log(`server-msg`);
        onServerMsgCallback(data);
    });  

    socket.on('server-msg-user-list-update', (data) => {
        console.log(`current user list: ${data}`);
        userNames = data.msg.split(',');
        onUserListUpdateCallback(data);
    });     
};

sendAdminMsgToServer = (data) => {
    socket.emit('admin-msg', data);
};
