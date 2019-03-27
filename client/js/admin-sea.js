
console.log('admin-sea.js');

seaGamePhase = () => {
    console.log('gamePhase()');
    let coin = Math.floor(Math.random() * 2) + 1;
    console.log('coin:' + coin);
    let data = {
        msg: 'sea-game-msg',
        land: coin === 1,
        sea: coin === 2
    };
    broarcastToMobiles(data);
};

startSeaGame = () => {
    console.log('startSeaGame()');
    hideAllConatiners();
    showContainer('div.admin-sea-container');
    startGame('start-game-sea', seaGamePhase);
    for (let i = 0; i < 10; i++) {
        setTimeout(seaGamePhase, 50);
    }

};
