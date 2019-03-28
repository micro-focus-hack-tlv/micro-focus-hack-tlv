
console.log('admin-sea.js');

let isSeaGameOn = false;
let seaCounter = 0;

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
    if (isSeaGameOn && ++seaCounter < 20) {
        setTimeout(seaGamePhase, 3000);
    }
};

startSeaGame = () => {
    console.log('startSeaGame()');
    hideAllConatiners();
    showContainer('div.admin-sea-container');
    isSeaGameOn = true;
    seaCounter = 0;
    broarcastToMobiles({ msg: 'start-game-sea' });
    seaGamePhase();
};

stopSeaGame = () => {
    isSeaGameOn = false;
    stopGame();
};
