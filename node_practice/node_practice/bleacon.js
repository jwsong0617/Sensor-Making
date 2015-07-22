var Bleacon = require('bleacon');
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0'
            
Bleacon.startScanning(uuid);

Bleacon.on('discover', function (bleacon) {
    if (bleacon) {
        console.log("bleacon discoverd: " + bleacon.uuid + "\t" + bleacon.rssi+"\t"+bleacon.proximity);
    }
});
