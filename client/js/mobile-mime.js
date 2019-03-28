
console.log('mobile-mime.js');

let gameColor = 'red';

startMimeGame = () => {
    console.log('startMimeGame()');
    hideAllConatiners();
    showContainer('div.mobile-mime-container');
};

showMessagesFromMimeGame = (data) => {
    console.log('MIME');
    console.log('Phrase: ' + data.selectedPhrase);

    if(data.userName === userName) {
        document.getElementById('phrase').innerText = data.selectedPhrase;
        document.getElementById('phraseFoundButton').style.visibility = "visible";
    } else {
        document.getElementById('phrase').innerText = 'בהצלחה';
        document.getElementById('phraseFoundButton').style.visibility = "hidden";
    }
};

showBackgroundColor = () => {
    console.log('game color: '+gameColor);
    document.body.style.backgroundColor = gameColor;
}