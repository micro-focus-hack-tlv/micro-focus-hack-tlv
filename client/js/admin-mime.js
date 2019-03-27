
console.log('admin-mime.js');

let listOfPhrases = [];

setPharses = () => {
    console.log('setPharses()');
	listOfPhrases.push('house');
	listOfPhrases.push('fish');
	listOfPhrases.push('dog');
	listOfPhrases.push('table');
};

mimeGamePhase = () => {
    console.log('gamePhase()');
	let data = {
        msg: 'mime-game-msg',
        selectedPhrase: listOfPhrases[Math.floor(Math.random()*listOfPhrases.length)]
    };
	//broarcastToMobiles(data);
};

startMimeGame = () => {
    console.log('startMimeGame()');
    hideAllConatiners();
    showContainer('div.admin-mime-container');
    startGame('start-game-mime', mimeGamePhase);
};

setPharses();
