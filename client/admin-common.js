
console.log('admin-common.js');

let userNames = [];

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

broarcastToMobiles = (data) => {
    socket.emit('admin-msg-broadcast-to-clients', data);
};
    
getRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};
    
startGame = (gamePhase) => {
    for (let i=0;i<10;i++){
        setTimeout(gamePhase, 500);
    }
};
