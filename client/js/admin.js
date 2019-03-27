
console.log('admin-common.js');

let userNames = [];

registerAdmin = (onServerMsgCallback, onUserListUpdateCallback) => {
    console.log(`registerAdmin()`);
    connectToServer('ADMIN');
    
    socket.on('server-msg', (data) => {
        console.log(`on.server-msg: ${data.msg}`);
        onServerMsgCallback(data);
    });  

    socket.on('server-msg-user-list-update', (data) => {
        console.log(`on.server-msg-user-list-update: ${data.msg}`);
        userNames = data.msg ? data.msg.split(',') : [];
        onUserListUpdateCallback(data);
    });     
};

broarcastToMobiles = (data) => {
    console.log(`broarcastToMobiles(${data.msg})`);
    socket.emit('admin-msg-broadcast-to-clients', data);
};
    
getRandom = (max) => {    
    return Math.floor(Math.random() * Math.floor(max));
};
    
startGame = (gamePhase) => {
    console.log(`startGame()`);
    for (let i=0; i<10; i++) {
        setTimeout(gamePhase, 5000);
    }
};
