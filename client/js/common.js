
let socket;
let userName;

connectToServer = (name) => {
    userName = name;
    if (!socket) {
        console.log(`connecting to server...`);
        socket = io.connect();
    }
    console.log(`sending username "${name}" to server...`);
    socket.emit('client-msg-register-user', {
        userName: name
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
