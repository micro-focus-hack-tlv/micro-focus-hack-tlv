
const SERVER_ADDRESS = 'localhost';
const SERVER_PORT = 4242;

let socket;
let userName;

connectToServer = (userName) => {
    userName = userName;
    console.log(`connecting to server...`);
    let socket = io.connect(`http://${SERVER_ADDRESS}:${SERVER_PORT}`);
    
    socket.on('server-msg-user-registered', (data) => {
        console.log(`user registered on server`);
    });

    console.log(`sending username "${userName}" to server...`);
    socket.emit('client-msg-register-user', {
        userName: userName
    });
}