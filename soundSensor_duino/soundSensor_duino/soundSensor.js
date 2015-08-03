var arduinoPort = 'USB0';
var pinName = 'A0'
var arduino = require('duino'),
    board = new arduino.Board({
        device: 'USB0'
    });


exports.removeSoundListener = function () {
    process.exit();
    console.log('Sound Listener is removed');
}
exports.addSensorListener = function (callback) {
    board.on('ready', function () {
        console.log("arduino board is ready to serve.");
        board.pinMode(pinName, 'in');
        
        setInterval(function () {
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
            pin, volume;
        
        if (!m.length) {
            return;
        }
        
        pin = m[0];
        volume = m.length === 2 ? m[1] : null;
        timestamp = new Date().getTime();
        callback(volume, timestamp)
    });
}
process.on('exit', function (code) {
    if (code == 0) {
        console.log('Sound Listener is removed');
    }
    else {
        console.log('About to exit with code:', code);
    }
});

        