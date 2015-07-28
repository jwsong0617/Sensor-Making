var arduinoPort = 'USB0';
var pinName = '00'
var sensorValue, cm; 
var arduino = require('duino'),
    board = new arduino.Board({
        device: 'USB0'
    });

board.on('ready', function () {
    console.log("arduino board is ready to serve.");
    board.pinMode(pinName, 'in');
});

board.on('data', function (message) {
    console.log(m);
});