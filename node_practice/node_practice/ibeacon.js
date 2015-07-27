var Bleacon = require('bleacon');
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0'
Bleacon.startScanning(uuid);

exports.getBeaconData = function (callback){
    Bleacon.on('discover', function (bleacon) {
        if (bleacon) {
            var timestamp = Date().getTime();
            callback(bleacon,timestamp);
        }
    });
}