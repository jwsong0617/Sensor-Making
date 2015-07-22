/*
  Continously scans for peripherals and prints out message when they enter/exit
    In range criteria:      RSSI < threshold
    Out of range criteria:  lastSeen > grace period
  based on code provided by: Mattias Ask (http://www.dittlof.com)
*/
var noble = require('noble');

var RSSI_THRESHOLD = -90;
var EXIT_GRACE_PERIOD = 10000; // milliseconds

var inRange = [];

noble.on('discover', function (peripheral) {
    if (peripheral.rssi < RSSI_THRESHOLD) {
        // ignore
        return;
    }
    
    var uuid = peripheral.uuid;
    var entered = !inRange[uuid];
    
    if (entered) {
        inRange[uuid] = {
            peripheral: peripheral
        };
        
        console.log('"' + peripheral.uuid + '" entered (RSSI ' + peripheral.rssi + ') ' + new Date());
    }
    
    inRange[uuid].lastSeen = Date.now();
});

setInterval(function () {
    for (var uuid in inRange) {
        if (inRange[uuid].lastSeen < (Date.now() - EXIT_GRACE_PERIOD)) {
            var peripheral = inRange[uuid].peripheral;
            
            console.log('"' + peripheral.uuid + '" exited (RSSI ' + peripheral.rssi + ') ' + new Date());
            
            delete inRange[uuid];
        }
    }
}, EXIT_GRACE_PERIOD / 2);
noble.on('stateChange', function (state) {
    if (state === 'poweredOn') {
        noble.startScanning();
    } else {
        noble.stopScanning();
    }
});
//noble.startScanning([], true);