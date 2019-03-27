
console.log('mobile-wait.js');

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);
};

setUserNameFromLocalStorage();
registerMobile(userName, onServerMsg);
