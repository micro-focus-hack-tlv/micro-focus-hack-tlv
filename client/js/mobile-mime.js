
console.log('mobile-mime.js');

startMimeGame = () => {
    console.log('startMimeGame()');
    hideAllConatiners();
    showContainer('div.mobile-mime-container');
};

showMessagesFromMimeGame = (data) => {
    if(data.userName === userName) {
        document.getElementById('phrase').innerText = data.selectedPhrase;
        document.getElementById('phraseFoundButton').style.visibility = "visible";
    } else {
        document.getElementById('phrase').innerText = 'בהצלחה';
        document.getElementById('phraseFoundButton').style.visibility = "hidden";
    }

    console.log('MIME');
    console.log('Phrase: ' + data.selectedPhrase);
};