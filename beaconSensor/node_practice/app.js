//var dbmanager = require('./dbmanager.js');
var dbmanagerTest = require('./dbmanagerTest.js');
var ibeacon = require('./ibeacon.js');
/*
db2 = dbmanager.getDB('beacon2');
ibeacon.addBeaconListener(function (beacon,timestamp){
    dbmanager.insertBeaconData(db2, 'iBeacon2', timestamp, beacon.uuid, beacon.accuracy);
    });
*/
ibeaconDB = dbmanagerTest.getDataBase('ibeacon');
ibeacon.addBeaconListener(function (beacon, timestamp) {
    ibeaconDB.insertData('ibeacon', timestamp, beacon.uuid, beacon.accuracy);
});
