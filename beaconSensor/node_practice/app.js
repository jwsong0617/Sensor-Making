var dbmanager = require('./dbtest.js');
var ibeacon = require('./ibeacon.js');

ibeaconDB = dbmanager.getDataBase('ibeacon');
/*
ibeaconDB.createTable('ibeacon');
ibeacon.addBeaconListener(function (beacon, timestamp) {
    ibeaconDB.insertData('ibeacon', timestamp, beacon.uuid, beacon.accuracy);
});
*/
ibeaconDB.getData('ibeacon',  function (rows) {
    if (rows.length != 0) {
        rows.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
}, 'Timestamp == 1438060516877');

ibeaconDB.getData('ibeacon', function (rows) {
    if (rows.length != 0) {
        rows.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
});  