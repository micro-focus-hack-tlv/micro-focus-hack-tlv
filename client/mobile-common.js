
console.log('mobile-common.js');

registerMobile = (userName, onServerMsgCallback) => {
    socket = connectToServer(userName);
        
    socket.on('server-msg', (data) => {
        onServerMsgCallback(data);
    });

};
