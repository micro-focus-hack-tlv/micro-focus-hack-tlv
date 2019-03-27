
console.log('admin-mime.js');

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
};

onUserListUpdate = (data) => {
    console.log(`user list update ${data.msg}`);
    alert(`user list update ${data.msg}`);
};

registerAdmin(onServerMsg, onUserListUpdate);


let listOfPhrases = [];

setPharses = () => {
	listOfPhrases.push('house');
	listOfPhrases.push('fish');
	listOfPhrases.push('dog');
	listOfPhrases.push('table');
};

setPharses();

gamePhase =()=>{
	let coin= getRandom(listOfPhrases.length);
	let data = { gameName : 'mime-game'};
	data.selectedPhrase = listOfPhrases[coin];
	broadcastToClient(data);
};

onGameStarted(gamePhase);
