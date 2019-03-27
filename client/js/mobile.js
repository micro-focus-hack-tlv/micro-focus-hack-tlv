
console.log('mobile-common.js');

const LOCALSTORAGE_KEY_USERNAME = 'mfUserName';

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

    sendMobileMsgToServer({msg: `Hi from ${userName}`});
};

sendMobileMsgToServer = (data) => {
    console.log(`sendMobileMsgToServer(${data.msg})`);
    socket.emit('mobile-msg', data);
};

showMessagesFromSeaGame = (data) => {
    if (data.sea) {
        console.log('SEA');
        alert('SEA');        
    } else {
        console.log('LAND');
        alert('LAND');
    }
};

setUserNameFromLocalStorage = () => {
    userName = localStorage.getItem(LOCALSTORAGE_KEY_USERNAME);    
};
