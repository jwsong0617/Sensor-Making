﻿var noble = require('noble');
noble.on('stateChange', function (state) {
    if (state === 'poweredOn') {
        noble.startScanning(); //any service UUID, no duplicates
    } else {
        noble.stopScanning();
    }
});

noble.on('discover', function (peripheral) {
    if (peripheral) {
        console.log("peripheral discoverd: " + peripheral.uuid + "\t" + peripheral.rssi);
    }
    //var ib = new ibeacon(peripheral.uuid);
    peripheral.on('connect', function () {
        console.log('connected' + peripheral.uuid + "\t" + peripheral.rssi);
    });
    peripheral.on('disconnect', function () {
        console.log('disconnected' + peripheral.uuid + "\t" + peripheral.rssi);
    });

    //peripheral.on('rssiUpdate', writeout);//updateRSSI
    
    /*
    setInterval(function () {
        peripheral.updateRssi();
    }, 2000);
     * */
});
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