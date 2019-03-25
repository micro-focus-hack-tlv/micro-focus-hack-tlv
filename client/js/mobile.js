
connectMobile = () => {
    socket = connectToServer(document.getElementById('nameInput').value);
        
    socket.on('server-msg', (data) => {
        console.log(`got message from server: ${data.msg}`);
    });

};
