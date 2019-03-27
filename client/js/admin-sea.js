
console.log('admin-sea.js');

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
};

onUserListUpdate = (data) => {
    console.log(`onUserListUpdate(${data.msg})`);
    alert(`user list update ${data.msg}`);
};
   
gamePhase = () => {
    console.log('gamePhase()');
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
