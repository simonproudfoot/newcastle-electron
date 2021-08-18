// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// Opens the image in the default image viewer and waits for the opened app to quit.


// INSTALL 3RD PARTY APPS WITH NPM AND INCLUDE THEM HERE
let $ = require('jquery');
let jQuery = require('jquery');
require('bootstrap');
require('jquery-idletimer');
require('./js/app.js');
const {ipcRenderer} = require('electron');

// self executing function here
(function () {
    // SET ADMIN MODE  
    if (sessionStorage.getItem("admin") === null) {
        document.getElementById('adminModal').style.display = 'block'
    } else {
        document.getElementById('adminModal').style.display = 'none'
    }


    $("[data-adminmode]").click(function (e) {
        const mode = e.target.getAttribute('data-adminmode')
        document.getElementById('adminModal').style.display = 'none'
        sessionStorage.setItem("admin", mode);
        setMode(mode)
    })

    function setMode(adminMode) {
        if (adminMode == 'true') {
            document.getElementById('app').classList.remove('productionMode')
            const {ipcRenderer} = require('electron');

            // ...
            ipcRenderer.send('resize-window')

        } else {
            document.getElementById('app').classList.add('productionMode')
            // window.setFullScreen(true);
        }
    }
})();