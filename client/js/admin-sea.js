
console.log('admin-sea.js');

seaGamePhase = () => {
    console.log('gamePhase()');
    let coin = Math.floor(Math.random()*2);
    let data = {
        gameName: 'sea',
        land: coin === 1,
        sea: coin === 2
    };    
    broarcastToMobiles(data);
};

startSeaGame = () => {
    console.log('startSeaGame()');
    hideAllConatiners();
    showContainer('div.admin-sea-container');
    startGame('sea', seaGamePhase);
};
