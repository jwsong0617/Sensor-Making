var dbmanager = require('./dbmanager.js');
var ibeacon = require('./ibeacon.js');

ibeaconDB = dbmanager.getDataBase('ibeacon');
/*
ibeaconDB.createTable('ibeacon');
ibeacon.addBeaconListener(function (beacon, timestamp) {
    ibeaconDB.insertData('ibeacon', timestamp, beacon.uuid, beacon.accuracy);
});
*/
var rows = ibeaconDB.getData('ibeacon', 'Timestamp == 1438060516877');
if (rows.length != 0) {
                   rows.forEach(function (row) {
                        //print out results
                        console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
                    });
    }
var rows2 = ibeaconDB.getData('ibeacon')
if (rows2.length != 0) {
    
                    rows2.forEach(function (row) {
                        //print out results
                        console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
                    });
                    }
