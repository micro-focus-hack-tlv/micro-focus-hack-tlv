
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
    listOfPhrases.push('מלך האריות');
    listOfPhrases.push('הקוסם מארץ עוץ');
    listOfPhrases.push('קינג קונג');
    listOfPhrases.push('שלגיה ושבעת הגמדים');
    listOfPhrases.push('החבובות');
    listOfPhrases.push('מפלצות בעמ');
    listOfPhrases.push('אלאדין');
    listOfPhrases.push('אליס בארץ הפלאות');
    listOfPhrases.push('בת הים הקטנה');
    listOfPhrases.push('דמבו הפיל המעופף');
    listOfPhrases.push('היפה והחיה');
    listOfPhrases.push('הקול בראש');
    listOfPhrases.push('לשבור את הקרח');
    listOfPhrases.push('מואנה');
    listOfPhrases.push('מוצאים את נמו');
    listOfPhrases.push('משפחת סופר-על');
    listOfPhrases.push('ספר הגונגל');
    listOfPhrases.push('פו הדוב');
    listOfPhrases.push('צעצוע של סיפור');
    listOfPhrases.push('ראלף ההורס');
    listOfPhrases.push('שודדי הקאריביים');
     
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
let maxTime = 2000;
let frames = 30;
let kuku = (i, phaseData) => {
     if (i < frames) {
        broarcastToMobiles({
            msg: "mime-game-selecting-user",
            userName: userNames[i%userNames.length]
        });
        setTimeout(() => {
            kuku(i+1, phaseData);
        }, 100 + Math.pow(1/frames*i,15) * maxTime);
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
    document.getElementById('admin-mime-header').innerText = '!יאללה ' + phaseData.userName;
    kuku(0, phaseData);
};

stopMimeGame = () => {
    stopGame();
};

setPharses();
