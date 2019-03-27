
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

hideAllConatiner = () => {
    document.querySelectorAll('div[class$="-container"]').forEach(elm => {
        elm.classList.remove('show');
        elm.classList.add('hide');
    });
};

showConatiner = (selector) => {
    let elm = document.querySelector(selector);
    if (elm) {
        elm.classList.remove('hide');
        elm.classList.add('show');
    }
};
