
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
	let coin = Math.floor(Math.random()*listOfPhrases.length);
	let data = {
        gameName: 'mime-game',
        selectedPhrase: listOfPhrases[coin]
    };
	broarcastToMobiles(data);
};

startMimeGame = () => {
    console.log('startMimeGame()');
    startGame(mimeGamePhase);
}

setPharses();
