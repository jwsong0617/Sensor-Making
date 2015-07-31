var dbmanager = require('./dbtest.js');
var ibeacon = require('./ibeacon.js');

ibeaconDB = dbmanager.getDataBase('ibeacon');
ibeaconDB.showTableNames();
/*
ibeaconDB.createTable('ibeacon');
ibeacon.addBeaconListener(function (beacon, timestamp) {
    ibeaconDB.insertSignalData('ibeacon', timestamp, beacon.uuid, beacon.accuracy);
});

ibeaconDB.getQueryResult('ibeacon',  function (rows) {
    if (rows.length != 0) {
        rows.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
}, 'Timestamp == 1438060516877');

ibeaconDB.getQueryResult('ibeacon', function (rows) {
    if (rows.length != 0) {
        rows.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
});  
*/
