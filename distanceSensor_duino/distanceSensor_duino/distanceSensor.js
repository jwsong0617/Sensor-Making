﻿var arduinoPort = 'USB0';
var pinName = 'A0'
var arduino = require('duino'),
    board = new arduino.Board({
        device: 'USB0'
    });

//TODO: modify code if you have better method to removing Distancelistener
exports.removeDistanceListener = function () {
    process.exit();
    console.log('Distance Listener is removed');
}
exports.addSensorListener = function (callback) {
    board.on('ready', function () {
        console.log("arduino board is ready to serve.");
        board.pinMode(pinName, 'in');
        
        setInterval(function () {
            //console.log('request to get an analog value from ' + pinName);
            board.analogRead(pinName);
        }, 1000);
    });
    
    board.on('connected', function () {//connect checked
        console.log('serial port is connected');
    });
    
    
    board.on('data', function (message) {
        //    console.log(message);
        var m = message.slice(0, -1).split('::'),
            err = null,
            pin, data;
        
        if (!m.length) {
            return;
        }
        
        pin = m[0];
        data = m.length === 2 ? m[1] : null;
        
        //console.log('reading value from pin' + pin + ': ' + data);
        if (pin === pinName) {
            var cm = 10650.08 * Math.pow(data, -0.935) - 10;
            //console.log('current distance is ' + cm + ' cm');
        }
        timestamp = new Date().getTime();
        callback(cm, timestamp)
    });
}
process.on('exit', function (code) {
    if (code == 0) {
        console.log('Distance Listener is removed');
    }
    else {
        console.log('About to exit with code:', code);
    }
});        