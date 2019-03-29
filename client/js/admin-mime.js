
console.log('admin-mime.js');

let listOfPhrases = [];
let rounds = 0;

setPharses = () => {
    console.log('setPharses()');
    listOfPhrases.push('בחזרה לעתיד');
    listOfPhrases.push('הנסיכה הקסומה');
    listOfPhrases.push('רובין הוד');
    listOfPhrases.push('רובוטריקים');
    listOfPhrases.push('מלחמת הכוכבים');
    listOfPhrases.push('ביג');
    listOfPhrases.push('מת לחיות');
    listOfPhrases.push('דרדסים');
};

getGamePhase = () => {
    let data = { msg: 'mime-game-ended' };

    if (rounds <= listOfPhrases.length) {
        console.log('gamePhase()');
        let selectedPhraseIndex = Math.floor(Math.random() * (listOfPhrases.length - rounds - 1)) + 1;

        data.msg = 'mime-game-msg';
        data.selectedPhrase = listOfPhrases[selectedPhraseIndex];

        swapPharses(selectedPhraseIndex);

        rounds++;
    }
    return data;
};

swapPharses = (selectedPhraseIndex) => {
    let currentEndOfListIndex = listOfPhrases.length - rounds - 1;
    let temp = listOfPhrases[currentEndOfListIndex];
    listOfPhrases[currentEndOfListIndex] = listOfPhrases[selectedPhraseIndex];
    listOfPhrases[selectedPhraseIndex] = temp;
}

startMimeGame = () => {
    console.log('startMimeGame()');
    hideAllConatiners();
    showContainer('div.admin-mime-container');
    broarcastToMobiles({ msg: 'start-game-mime' });
    playNextMimeTurn();
};
let maxTime = 5000;
let frames = 10;
let kuku = (i, phaseData) => {
     if (i < frames) {
        broarcastToMobiles({
            msg: "mime-game-selecting-user",
            userName: userNames[i%userNames.length]
        });
        setTimeout(() => {
            kuku(i+1, phaseData);
        }, 100);
    } else {
        broarcastToMobiles(phaseData);
    }
};

playNextMimeTurn = () => { 
    let selectedUserIndex = Math.floor(Math.random() * userNames.length);
    let phaseData = getGamePhase();
    if (phaseData.msg === 'mime-game-ended') {
        stopGame();
        return;
    }
    phaseData.userName = userNames[selectedUserIndex];
    console.log('יאללה ' +  phaseData.userName);
    kuku(0, phaseData);
};

stopMimeGame = () => {
    stopGame();
};

setPharses();
