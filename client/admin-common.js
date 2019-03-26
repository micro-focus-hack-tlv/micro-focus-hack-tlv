
console.log('admin-common.js');

registerAdmin = () => {
    socket = connectToServer('ADMIN');
        
    socket.on('server-msg', (data) => {
        console.log(`got message from server: ${data.msg}`);
    });

};

registerAdmin();

