
console.log('admin-common.js');

let userNames = [];

registerAdmin = (onServerMsgCallback, onUserListUpdateCallback) => {
    console.log(`registerAdmin()`);
    connectToServer('ADMIN');

    socket.on('server-msg', (data) => {
        console.log(`on.server-msg: ${data.msg}`);
        onServerMsgCallback(data);
    });

    socket.on('client-msg', (data) => {
        console.log(`on.mobile-msg: ${data.msg}`);
        if (data.msg === 'turn ended'){
            playNextTurn();
        } else if (data.msg === 'turn failed'){ //for sea game - user failed
            userSeaGameOver(data.userName);
        }
    });

    socket.on('server-msg-user-list-update', (data) => {
        console.log(`on.server-msg-user-list-update: ${data.msg}`);
        userNames = data.msg ? data.msg.split(',') : [];
        onUserListUpdateCallback(data);
    });
};

broarcastToMobiles = (data) => {
    console.log(`broarcastToMobiles(${data.msg})`);
    socket.emit('admin-msg', data);
};

playNextTurn = (msg) => { 
    findNextPlayer();
    console.log(`${msg}`);
    let selectedUserIndex = Math.floor(Math.random() * userNames.length);
    let phaseData = getGamePhase();
    if (phaseData.msg === 'mime-game-ended'){
        stopGame();
        return;
    }
    phaseData.userName = userNames[selectedUserIndex];
    console.log('יאללה ' +  phaseData.userName);
    document.getElementById('admin-mime-header').innerText = '!יאללה ' + phaseData.userName;
    broarcastToMobiles(phaseData);
};

findNextPlayer = () =>{
    //send to server
    let data={
        msg : 'find-next-player'
    };
    socket.emit('admin-msg', data);    
}

stopGame = () => {
    hideAllConatiners();
    showContainer('div#admin-main-container');
    broarcastToMobiles({ msg: 'stop-game' });
};

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
};

onUserListUpdate = (data) => {
    console.log(`onUserListUpdate(${data.msg})`);
    let namesElement = document.getElementById('user-names');
    while (namesElement.hasChildNodes()) {
        namesElement.removeChild(namesElement.firstChild);
    }
    userNames.forEach((user) => {
        var elm = document.createElement('div');
        elm.classList.add('user-name');
        elm.innerText = user;
        namesElement.appendChild(elm);
    });
};

registerAdmin(onServerMsg, onUserListUpdate);
stopGame();
