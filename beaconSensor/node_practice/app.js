var dbmanager = require('./dbtest.js');
var ibeacon = require('./ibeacon.js');

ibeaconDB = dbmanager.getDataBase('ibeacon');
/*
ibeaconDB.createTable('ibeacon');
ibeacon.addBeaconListener(function (beacon, timestamp) {
    ibeaconDB.insertData('ibeacon', timestamp, beacon.uuid, beacon.accuracy);
});
*/
ibeaconDB.getData('ibeacon', 'Timestamp == 1438060516877', function () {
    if (rows.length != 0) {
        rows.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
}
);

ibeaconDB.getData('ibeacon', false, function () {
    if (rows2.length != 0) {
        rows2.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
});  