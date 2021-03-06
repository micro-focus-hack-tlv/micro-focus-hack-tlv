console.log('mobile-sea.js');

let counter = 0;

startSeaGame = () => {
    counter = 0;
    console.log('startSeaGame()');
    hideAllConatiners();
    showContainer('div.mobile-sea-container');
};

showMessagesFromSeaGame = (data) => {
    let numOfSoundPermutations = 3;
    let rnd = counter % numOfSoundPermutations; //Math.floor(Math.random()*numOfSoundPermutations);
    if (data.sea) {
        console.log('SEA');
        let audio = new Audio(`/sound/yam${rnd}.mp3`);
        audio.volume = 1.0;
        audio.play();
    } else {
        console.log('LAND');
        let audio = new Audio(`/sound/yabasha${rnd}.mp3`);
        audio.volume = 1.0;
        audio.play();
    }
    counter++;
};

onSeaFailed = () => {
    console.log('Turn failed');
    let data = {
        msg: 'turn failed',
        userName: userName
    };
    sendMobileMsgToServer(data);
    waitForGame();
};
