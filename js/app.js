
var dgram = require('dgram');
const brightsignPort = 5000
const brightsignIp = '192.168.0.255'

$(document).ready(function () {
  // PLACE ALL PROJECT JS HERE
  $("#testClick").click(function () {
    alert('test');
  })


  $("[data-brightsign]").click(function (e) {
    const val = e.target.getAttribute('data-brightsign')
    sendPacket(val)
    alert(val + ' has been emitted to:' + brightsignIp + ' - ' + brightsignPort)
  })


  function sendPacket(message) {
    // example 192.168.0.255 5000 TXXX
    var client = dgram.createSocket('udp4');
    if (message) {
      client.send(message, 0, message.length, brightsignPort, brightsignIp, (error) => {
        if (error) {
          client.close();
        }
      });
    }
  }


 



});

