
console.log('admin-games.js');

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
    alert(data.msg);
};

onUserListUpdate = (data) => {
    console.log(`onUserListUpdate(${data.msg})`);
    alert(`user list update ${userNames.join()}`);

    let namesElement = document.getElementById('user-names');

    // Clear the users list
    while (namesElement.hasChildNodes()) {
        namesElement.removeChild(namesElement.firstChild);
    }

    userNames.forEach((user) => {
        var liElement = document.createElement('div');
        liElement.innerText = user;
        namesElement.appendChild(liElement);
    });
};

goBroarcastToMobiles = () => {
    console.log(`goBroarcastToMobiles())`);
    broarcastToMobiles({ msg: "Hi from admin" });
};

registerAdmin(onServerMsg, onUserListUpdate);
