
console.log('mobile-common.js');

registerMobile = (userName, onServerMsgCallback) => {
    connectToServer(userName);
        
    socket.on('server-msg', (data) => {
        onServerMsgCallback(data);
    });

};
