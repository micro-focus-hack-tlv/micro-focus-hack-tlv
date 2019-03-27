
console.log('mobile-sea.js');

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
};

setUserNameFromLocalStorage();
registerMobile(userName, onServerMsg);
