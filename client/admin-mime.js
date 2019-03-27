
console.log('admin-mime.js');

let listOfPhrases = [];

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
};

onUserListUpdate = (data) => {
    console.log(`onUserListUpdate(${data.msg})`);
    alert(`user list update ${data.msg}`);
};

setPharses = () => {
    console.log('setPharses()');
	listOfPhrases.push('house');
	listOfPhrases.push('fish');
	listOfPhrases.push('dog');
	listOfPhrases.push('table');
};

gamePhase = () => {
    console.log('gamePhase()');
	let coin = getRandom(listOfPhrases.length);
	let data = {
        gameName: 'mime-game',
        selectedPhrase: listOfPhrases[coin]
    };
	broarcastToMobiles(data);
};

registerAdmin(onServerMsg, onUserListUpdate);
setPharses();
startGame(gamePhase);
