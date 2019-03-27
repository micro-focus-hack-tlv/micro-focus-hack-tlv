
console.log('admin-mime.js');

let listOfPhrases = [];

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
};

onUserListUpdate = (data) => {
    console.log(`user list update ${data.msg}`);
    alert(`user list update ${data.msg}`);
};

setPharses = () => {
	listOfPhrases.push('house');
	listOfPhrases.push('fish');
	listOfPhrases.push('dog');
	listOfPhrases.push('table');
};

gamePhase = () => {
	let coin= getRandom(listOfPhrases.length);
	let data = { gameName : 'mime-game'};
	data.selectedPhrase = listOfPhrases[coin];
	broadcastToClient(data);
};

setPharses();
registerAdmin(onServerMsg, onUserListUpdate);
startGame(gamePhase);
