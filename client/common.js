
const SERVER_ADDRESS = 'localhost';
const SERVER_PORT = 4242;

let socket;
let userName;
let userId;

connectToServer = (userName) => {
    userName = userName;
    console.log(`connecting to server...`);
    let socket = io.connect(`http://${SERVER_ADDRESS}:${SERVER_PORT}`);
    console.log(`sending username "${userName}" to server...`);
    
    socket.on('server-msg-user-id', (data) => {
        console.log(`got user id from server: ${data.userId}`);
        userId = data.userId;
    });
    
    socket.emit('client-msg-user-name', {
        userName: userName
    });
}