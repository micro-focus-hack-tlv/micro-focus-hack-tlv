
console.log('mobile-common.js');

registerMobile = (userName, onServerMsgCallback) => {
    connectToServer(userName);
        
    socket.on('server-msg', (data) => {
        if (data.gameName === 'sea'){
            showMessagesFromSeaGame(data);
            return;
        }
        onServerMsgCallback(data);

    });

    sendMobileMsgToServer({msg: `Hi from ${userName}`});
};

sendMobileMsgToServer = (data) => {
    socket.emit('mobile-msg', data);
}

showMessagesFromSeaGame = (data) => {
    if (data.sea){
        console.log('SEA');
        alert('SEA');
        return;
    }
    console.log('LAND');
    alert('LAND');
}


