console.log('admin-sea.js');

let isSeaGameOn = false;
let seaCounter = 0;
let seaUsers = [];

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
    seaUsers = userNames.slice();

    let namesElement = document.getElementById('users');
    seaUsers.forEach((user) => {
        var elm = document.createElement('div');
        elm.classList.add("user-name");
        elm.innerText = user;
        namesElement.appendChild(elm);
    });

    broarcastToMobiles({msg: 'start-game-sea'});
    seaGamePhase();
};

stopSeaGame = () => {
    isSeaGameOn = false;
    stopGame();
};

userSeaGameOver = (name) => {

    console.log('Game over from user ' + name);
    seaUsers = _.remove(seaUsers, (u) => {
        return u === name;
    });


    let namesElement = document.getElementById('users');
    for (let i = 0; i < namesElement.childNodes.length; i++) {
        console.log('current player: ' + namesElement.childNodes[i].innerText);
        if (namesElement.childNodes[i].innerText === name) {
            console.log('found failed player: ' + namesElement.childNodes[i].innerText);
            namesElement.childNodes[i].innerText = '';
        }
    }
    if (seaUsers.length === 1){
        weHaveAWinner(seaUsers[0]);
        return;
    }
};

weHaveAWinner = (winnerName) =>{
    let won = 'ניצחון עבור: ';
    let namesElement = document.getElementById('users');
    namesElement.childNodes[0].innerText = won + ' '+ winnerName;
    namesElement.style.textAlign = 'right';
    setTimeout(stopGame, 10000);
}