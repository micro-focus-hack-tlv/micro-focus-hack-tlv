
console.log('admin-sea.js');

onServerMsg = (data) => {
    console.log(`got message from server: ${data.msg}`);
};

registerAdmin(onServerMsg);
