var arduino = require('duino'),
    board = new arduino.Board({
        device: 'USB0'
    });

var led = new arduino.Led({
    board: board,
    pin: 13
});

led.blink();