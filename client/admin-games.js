
console.log('admin-games.js');

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
};

msgToMobiles = () => {
    sendAdminMsgToServer({msg: "Hi from admin"});
};

registerAdmin(onServerMsg);
