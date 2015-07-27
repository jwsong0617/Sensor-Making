var dbmanager = require('./dbmanager.js');
//getDB checked
//db = dbmanager.getDB('beacon');
db2 = dbmanager.getDB('beacon2');

//createDBfile checked
//dbmanager.createDBfile('beacon2');

//createBeaconTable checked
//dbmanager.createBeaconTable(db2, 'iBeacon2');

//insertBeaconData checked
dbmanager.insertBeaconData(db2, 'iBeacon2', '1437569247455', 'itistest', 20);

//getBeaconData checked
/*
var date3 = '22 Jul 2015 00:00:00 GMT+0900';
var date4 = '23 Jul 2015 00:00:00 GMT+0900';
var d3 = Date.parse(date3);
var d4 = Date.parse(date4);
condition = "Timestamp >= " + d3 + " AND Timestamp <= " + d4
dbmanager.getBeaconData(db, 'iBeacon', condition, function (rows) {
    if (rows.length != 0) {
        rows.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
});
*/
dbmanager.closeDB(db2);