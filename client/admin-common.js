
console.log('admin-common.js');

sendAdminMsgToServer = (data) => {
    socket.emit('admin-msg', data);
}

registerAdmin = (onServerMsgCallback) => {
    connectToServer('ADMIN');
        
    socket.on('server-msg', (data) => {
        onServerMsgCallback(data);
    });    
};
