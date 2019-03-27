
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

goRegister = () => {
    console.log(`goRegister()`);
    let userName = document.getElementById('nameInput').value;
    localStorage.setItem(LOCALSTORAGE_KEY_USERNAME, userName);
    registerMobile(userName, onServerMsg);
};

sendMobileMsgToServer = (data) => {
    console.log(`sendMobileMsgToServer(${data.msg})`);
    socket.emit('mobile-msg', data);
};



setUserNameFromLocalStorage = () => {
    userName = localStorage.getItem(LOCALSTORAGE_KEY_USERNAME);    
};

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);  
};
