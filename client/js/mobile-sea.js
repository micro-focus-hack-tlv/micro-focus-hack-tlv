
console.log('mobile-sea.js');

startSeaGame = () => {
    console.log('startSeaGame()');
    hideAllConatiners();
    showContainer('div.mobile-sea-container');
};

showMessagesFromSeaGame = (data) => {
    if (data.sea) {
        console.log('SEA');
        let audio = new Audio(`/sound/yam.mp3`);
		audio.volume = 1.0;
		audio.play();   
    } else {
        console.log('LAND');
        let audio = new Audio(`/sound/yabasha.mp3`);
		audio.volume = 1.0;
		audio.play(); 
    }
};
