
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
	let coin = getRandom(listOfPhrases.length);
	let data = {
        gameName: 'mime-game',
        selectedPhrase: listOfPhrases[coin]
    };
	broarcastToMobiles(data);
};

setPharses();
//startGame(mimeGamePhase);
