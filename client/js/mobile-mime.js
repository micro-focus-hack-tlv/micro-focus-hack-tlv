
console.log('mobile-mime.js');

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);    
};

setUserNameFromLocalStorage();
registerMobile(userName, onServerMsg);
