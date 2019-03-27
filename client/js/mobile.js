
console.log('mobile-common.js');

registerMobile = (userName) => {
    console.log(`registerMobile(${userName})`);
    connectToServer(userName);

    socket.on('server-msg', (data) => {
        console.log(`onServerMsg(${data.msg})`);
        if (data.msg === 'stop-game') {
            waitForGame();    
        }      
    });

    socket.on('admin-msg', (data) => {
        if (data.msg === 'start-game-mime') {
            startMimeGame();
        } else if (data.msg === 'start-game-sea') {
            startSeaGame();
        } else if (data.msg === 'mime-game-msg') {
            showMessagesFromMimeGame(data);            
        } else if (data.msg === 'sea-game-msg') {
            showMessagesFromSeaGame(data);            
        }
    });
    
    waitForGame();
};

goRegister = () => {
    console.log(`goRegister()`);
    let userName = document.getElementById('nameInput').value;
    registerMobile(userName);
};

waitForGame = () => {
    hideAllConatiners();
    showContainer('div#mobile-wait-container');    
};

sendMobileMsgToServer = (data) => {
    console.log(`sendMobileMsgToServer(${data.msg})`);
    socket.emit('mobile-msg', data);
};
