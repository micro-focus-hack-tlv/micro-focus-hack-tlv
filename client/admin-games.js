
console.log('admin-games.js');

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
    alert(data.msg);
};

onUserListUpdate = (data) => {
    console.log(`user list update ${data.msg}`);
    alert(`user list update ${userNames.join()}`);
};

msgToMobiles = () => {
    sendAdminMsgToServer({msg: "Hi from admin"});
};

registerAdmin(onServerMsg, onUserListUpdate);
