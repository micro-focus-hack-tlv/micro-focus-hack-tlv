
console.log('admin-games.js');

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
    alert(data.msg);
};

onUserListUpdate = (data) => {
    console.log(`onUserListUpdate(${data.msg})`);
    alert(`user list update ${userNames.join()}`);
};

goBroarcastToMobiles = () => {
    console.log(`goBroarcastToMobiles())`);
    broarcastToMobiles({msg: "Hi from admin"});
};

registerAdmin(onServerMsg, onUserListUpdate);
