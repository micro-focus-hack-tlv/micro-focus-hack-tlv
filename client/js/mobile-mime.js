
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
        document.getElementById('mime-center-circle').style.visibility = "visible";
        document.getElementById('mobile-mime-container').classList.remove('mime-image-background');
        document.getElementById('mobile-mime-container').classList.remove('image-background');
        document.getElementById("mime-header").classList.remove('mime-not-chosen');
    } else {
        document.getElementById("mime-header").innerText = data.userName + ' מציג\n אתם מנחשים';
        document.getElementById('phraseFoundButton').style.visibility = "hidden";
        document.getElementById('mime-center-circle').style.visibility = "hidden";
        document.getElementById('mobile-mime-container').classList.add('mime-image-background');
        document.getElementById('mobile-mime-container').classList.add('image-background');
        document.getElementById("mime-header").classList.add('mime-not-chosen');
    }
};
