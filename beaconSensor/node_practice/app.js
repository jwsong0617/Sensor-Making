var dbmanager = require('./dbmanager.js');
var ibeacon = require('./ibeacon.js');

ibeaconDB = dbmanager.getDataBase('ibeacon');
/*
ibeaconDB.createTable('ibeacon');
ibeacon.addBeaconListener(function (beacon, timestamp) {
    ibeaconDB.insertData('ibeacon', timestamp, beacon.uuid, beacon.accuracy);
});
*/
ibeaconDB.getData('ibeacon', 'Timestamp == 1438060516877');
ibeaconDB.getData('ibeacon',3)
