
console.log('mobile-common.js');

registerMobile = (userName, onServerMsgCallback) => {
    console.log(`registerMobile(${userName})`);
    connectToServer(userName);

    socket.on('server-msg', (data) => {
        if (data.gameName === 'sea'){
            showMessagesFromSeaGame(data);            
        } else {
            onServerMsgCallback(data);
        }
    });
    
    waitForGame();
};

goRegister = () => {
    console.log(`goRegister()`);
    let userName = document.getElementById('nameInput').value;
    registerMobile(userName, onServerMsg);
};

waitForGame = () => {
    hideAllConatiners();
    showContainer('div#mobile-wait-container');    
};

sendMobileMsgToServer = (data) => {
    console.log(`sendMobileMsgToServer(${data.msg})`);
    socket.emit('mobile-msg', data);
};

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
    if (data.msg === 'start-game') {
        console.log(`${data.prm}`);
        if (data.prm === 'mime') {
            startMimeGame();
        } else if (data.prm === 'sea') {
            startSeaGame();
        }
    }
    if (data.msg === 'stop-game') {
        waitForGame();    
    }
};
