
console.log('admin-sea.js');

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
};

onUserListUpdate = (data) => {
    console.log(`user list update ${data.msg}`);
    alert(`user list update ${data.msg}`);
};
   
gamePhase = () => {
    let coin = getRandom(2);
    let data = {
        gameName: 'sea',
        land: coin === 1,
        sea: coin === 2
    };    
    broarcastToMobiles(data);
};

registerAdmin(onServerMsg, onUserListUpdate);
startGame(gamePhase);
