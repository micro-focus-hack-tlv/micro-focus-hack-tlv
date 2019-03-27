
console.log('admin-common.js');

registerAdmin = (onServerMsgCallback) => {
    connectToServer('ADMIN');
        
    socket.on('server-msg', (data) => {
        onServerMsgCallback(data);
    });    
};

sendAdminMsgToServer = (data) => {
    socket.emit('admin-msg', data);
}
