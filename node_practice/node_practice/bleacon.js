var Bleacon = require('bleacon');
Bleacon.startScanning('78a5044f5068');

Bleacon.on('discover', function (bleacon) {
    if (bleacon) {
        console.log("bleacon discoverd: " + bleacon.uuid + "\t" + bleacon.rssi+"\t"+bleacon.proximity);
    }
});
