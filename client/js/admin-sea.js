
console.log('admin-sea.js');

seaGamePhase = () => {
    console.log('gamePhase()');
    let coin = getRandom(2);
    let data = {
        gameName: 'sea',
        land: coin === 1,
        sea: coin === 2
    };    
    broarcastToMobiles(data);
};

//startGame(seaGamePhase);
