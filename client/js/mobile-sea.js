
console.log('mobile-sea.js');

showMessagesFromSeaGame = (data) => {
    if (data.sea) {
        console.log('SEA');
        alert('SEA');        
    } else {
        console.log('LAND');
        alert('LAND');
    }
};
