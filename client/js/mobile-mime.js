
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

    let namesElement = document.getElementById('phrase');
    namesElement.innerHTML = data.selectedPhrase;
};

showBackgroundColor = () => {
    console.log('game color: '+gameColor);
    document.body.style.backgroundColor = gameColor;
}