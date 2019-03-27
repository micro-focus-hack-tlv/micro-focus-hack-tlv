
console.log('admin-sea.js');

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
};

onUserListUpdate = (data) => {
    console.log(`user list update ${data.msg}`);
    alert(`user list update ${data.msg}`);
};

registerAdmin(onServerMsg, onUserListUpdate);
    
gamePhase =()=>{
        let coin= getRandom(2);
        let data = {gameName : 'sea'};
        if (coin === 1){
            data.land = true;
        }
        else{
            data.sea = true;
        }
        broadcastToClient(data);
};
    
onGameStarted(gamePhase);
