var noble = require('bleacon');
Bleacon.startScanning();

Bleacon.on('discover', function (bleacon) {
    if (bleacon) {
        console.log("bleacon discoverd: " + bleacon.uuid + "\t" + bleacon.rssi+"\t"+bleacon.proximity);
    }
    /*
    //var ib = new ibeacon(bleacon.uuid);
    bleacon.on('connect', function () {
        console.log('connected' + bleacon.uuid + "\t" + bleacon.rssi);
    });
    bleacon.on('disconnect', function () {
        console.log('disconnected' + bleacon.uuid + "\t" + bleacon.rssi);
    });

    //bleacon.on('rssiUpdate', writeout);//updateRSSI
    
    /*
    setInterval(function () {
        bleacon.updateRssi();
    }, 2000);
     * */
});
setInterval(function () {
    Bleacon.startScanning();
}, 2000);
/*
function writeout(rssi) {
    console.log(rssi);
}
function ibeacon(uuid) {
    var id = uuid;
    this.get_uuid = function () {
        return this.id;
    }
};

ibeacon.prototype.archiveRSSI = function (rssi) {
    console.log(rssi);
};
 * */