
console.log('mobile-register.js');

onServerMsg = (data) => {
    console.log(`onServerMsg(${data.msg})`);  
};

goRegister = () => {
    console.log(`goRegister()`);
    let userName = document.getElementById('nameInput').value;
    localStorage.setItem(LOCALSTORAGE_KEY_USERNAME, userName);
    registerMobile(userName, onServerMsg);
};
