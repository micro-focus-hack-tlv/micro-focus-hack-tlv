
console.log('mobile-common.js');

registerMobile = (userName, onServerMsgCallback) => {
    connectToServer(userName);
        
    socket.on('server-msg', (data) => {
        onServerMsgCallback(data);
    });

    sendMobileMsgToServer({msg: `Hi from ${userName}`});
};

sendMobileMsgToServer = (data) => {
    socket.emit('mobile-msg', data);
}
