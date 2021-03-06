
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

    if(data.msg === 'mime-game-selecting-user') {
        document.getElementById("mime-header").innerText = '';
        document.getElementById('phraseFoundButton').style.visibility = "hidden";
        document.getElementById('mime-center-circle').style.visibility = "hidden";
        document.getElementById('mobile-mime-container').classList.remove('mime-image-background');
        document.getElementById('mobile-mime-container').classList.remove('image-background');
        document.getElementById("mime-header").classList.remove('mime-not-chosen');
        if(userName === data.userName) {
            console.log('ywy user');
            document.getElementById('mobile-mime-container').classList.add('background-red');
            document.getElementById('mobile-mime-container').classList.remove('background-black');
        } else {
            console.log('not user')
            document.getElementById('mobile-mime-container').classList.add('background-black');
            document.getElementById('mobile-mime-container').classList.remove('background-red');
        }
        return;
    }
    document.getElementById('mobile-mime-container').classList.remove('background-black');
    document.getElementById('mobile-mime-container').classList.remove('background-red');

    if(data.userName === userName) {
		document.getElementById("mime-header").innerText = 'יאללה ' + userName +'\n!...את\\ה מציג\\ה';
        document.getElementById('phrase').innerText = data.selectedPhrase;
        document.getElementById('phraseFoundButton').style.visibility = "visible";
        document.getElementById('mime-center-circle').style.visibility = "visible";
        document.getElementById('mobile-mime-container').classList.remove('mime-image-background');
        document.getElementById('mobile-mime-container').classList.remove('image-background');
        document.getElementById("mime-header").classList.remove('mime-not-chosen');
    } else {
        document.getElementById("mime-header").innerText = data.userName + ' מציג\\ה\n אתם מנחשים';
        document.getElementById('phraseFoundButton').style.visibility = "hidden";
        document.getElementById('mime-center-circle').style.visibility = "hidden";
        document.getElementById('mobile-mime-container').classList.add('mime-image-background');
        document.getElementById('mobile-mime-container').classList.add('image-background');
        document.getElementById("mime-header").classList.add('mime-not-chosen');
    }
};

showBackgroundColor = () => {
    console.log('game color: '+gameColor);
    showContainer('div.mobile-pick-next-player');
    document.getElementById('phraseFoundButton').style.visibility = "hidden";
}