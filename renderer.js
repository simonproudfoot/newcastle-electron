// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// Opens the image in the default image viewer and waits for the opened app to quit.

var dgram = require('dgram');
function sendPacket(message) {
    // example 192.168.0.255 5000 TXXX
    var client = dgram.createSocket('udp4');
    if (message) {
        client.send(message, 0, message.length, 5000, '192.168.0.255', (error) => {
            if (error) {
                client.close();
            }
        });
    }
}
// self executing function here
(function () {
    // Listen for clicks on "A" tags with data-script attributes    
    document.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', e => {
            var message = e.target.getAttribute('data-script');
            sendPacket(message)

        })
    })
})();