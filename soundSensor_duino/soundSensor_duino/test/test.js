﻿
/*
var arduinoPort = 'USB0';
var pinName = 'A0'
var arduino = require('duino'),
    board = new arduino.Board({
        device: 'USB0'
    });

board.on('ready', function () {
    console.log("arduino board is ready to serve.");
    board.pinMode(pinName, 'in');
    
    setInterval(function () {
        //console.log('request to get an analog value from ' + pinName);
        board.analogRead(pinName);
    }, 1000);
});

board.on('data', function (message) {
    //    console.log(message);
    var m = message.slice(0, -1).split('::'),
        err = null,
        pin, volume;
    
    if (!m.length) {
        return;
    }
    
    pin = m[0];
    volume = m.length === 2 ? m[1] : null;        
timestamp = new Date().getTime();
console.log(timestamp + ', ' + volume);
});
*/
var dbmanager = require('../dbmanager.js');
dbmanager.create('sound', 'sound');
dbmanager.inquire();