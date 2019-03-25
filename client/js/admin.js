
const SERVER_ADDRESS = 'localhost';
const SERVER_PORT = 4242;

let socket = io.connect('http://localhost:4242');

socket.on('server-msg', (data) => {
    alert(data.msg);
});

socket.emit('client-msg', {msg: 'hello'});
