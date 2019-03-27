
const SERVER_ADDRESS = 'localhost';
const SERVER_PORT = 4242;

let socket;
let userName;

connectToServer = (userName) => {
    userName = userName;
    if (!socket) {
        console.log(`connecting to server...`);
        socket = io.connect(`http://${SERVER_ADDRESS}:${SERVER_PORT}`);        
    }
    console.log(`sending username "${userName}" to server...`);
    socket.emit('client-msg-register-user', {
        userName: userName
    });
};

hideAllConatiners = () => {
    let elms = document.querySelectorAll('div[id$="-container"]');    
    elms.forEach(elm => {
        elm.classList.remove('show');
        elm.classList.add('hide');
    });
};

showContainer = (selectorStr) => {
    let elm = document.querySelector(selectorStr);
    if (elm) {
        elm.classList.remove('hide');
        elm.classList.add('show');
    }
};
