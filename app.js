var http = require('http');
var path = require('path');

var indexPath = path.join(__dirname, 'index.html');

var tessel = require('tessel');
var ap = tessel.network.ap;
var greenLight = tessel.led[2];
var redLight = tessel.led[0];

greenLight.off();
redLight.off();

var controls = require('./motor.js');

var app = require('express')();
var server = http.Server(app);
var io = require('socket.io')(server);

app.get('/', function (request, response) {
  response.sendFile(indexPath);
});

function blink (led) {
  led.toggle();

  setTimeout(() => { led.toggle(); }, 500); 
}

io.on('connection', function(socket){
  console.log('a user connected');
  blink(greenLight);

  socket.on('forward', function () {
    controls.forward();
  });

  socket.on('reverse', function () {
    controls.reverse();
  });

  socket.on('brake', function () {
    controls.brake();
  });

  socket.on('left', controls.left);
  socket.on('right', controls.right);

  socket.on('disconnect', function() {
    console.log('user disconnected');
    blink(redLight);
    controls.stop();
  });
});

ap.create({
  ssid: 'TesselMobile',
  password: 'SuperSecret123'
}, function (error, settings) {
  if (error) {
    redLight.on();
    throw error;
  }

  server.listen(80, function() {
    greenLight.on();
  });
});
