
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
		document.getElementById("mime-header").innerText = 'יאללה ' + userName +'\n!...אתה מציג';
        document.getElementById('phrase').innerText = data.selectedPhrase;
        document.getElementById('phraseFoundButton').style.visibility = "visible";
    } else {
        document.getElementById("mime-header").innerText = userName + ' מציג אתם מנחשים';
        document.getElementById('phraseFoundButton').style.visibility = "hidden";
    }
};
