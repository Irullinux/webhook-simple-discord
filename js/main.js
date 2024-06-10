function pesan(){
    let name = document.getElementById("name").ariaValueMax;
    let pesan = document.getElementById("pesan").ariaValueMax;
    
    const webhook = "https://discord.com/api/webhooks/1249563638977531925/uKfEV4WY6UJVbUv8bx-OC6d1ZPFYe6MewF6Qmeb21dkajwjie1i4A5P9cnFn0JFdLqNM";
    const contents =`name:${name}\npesan: ${pesan}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content : contents
    }
    request.send(JSON.stringify(params));
}