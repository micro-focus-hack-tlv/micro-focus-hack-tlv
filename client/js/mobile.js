
let socket;
let userName = 'N/A';
let userId = 'N/A';

connectToServer = () => {
    console.log(`connecting to server...`);
    socket = io.connect(`http://${SERVER_ADDRESS}:${SERVER_PORT}`);

    userName = document.getElementById('nameInput').value;
    console.log(`sending username "${userName}" to server...`);
    socket.emit('client-msg-user-name', {
        userName: userName
    });

    socket.on('server-msg-user-id', (data) => {
        console.log(`got user id from server: ${data.userId}`);
        userId = data.userId;
    });
    
    socket.on('server-msg', (data) => {
        console.log(`got message from server: ${data.msg}`);
    });

};
