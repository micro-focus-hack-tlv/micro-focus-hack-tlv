
console.log('mobile-register.js');

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
    alert(data.msg);
};

goRegister = () => {
    registerMobile(document.getElementById('nameInput').value, onServerMsg);
};
