
console.log('mobile-mime.js');

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