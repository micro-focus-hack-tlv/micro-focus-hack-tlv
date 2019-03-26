
console.log('admin-common.js');

registerAdmin = (onServerMsgCallback) => {
    socket = connectToServer('ADMIN');
        
    socket.on('server-msg', (data) => {
        onServerMsgCallback(data);
    });

};
