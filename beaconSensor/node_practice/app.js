var dbmanagerTest = require('./dbmanagerTest.js');
var ibeacon = require('./ibeacon.js');

ibeaconDB = dbmanagerTest.getDataBase('ibeacon');
/*
ibeaconDB.createTable('ibeacon');
ibeacon.addBeaconListener(function (beacon, timestamp) {
    ibeaconDB.insertData('ibeacon', timestamp, beacon.uuid, beacon.accuracy);
});
*/
ibeaconDB.getData('ibeacon')
