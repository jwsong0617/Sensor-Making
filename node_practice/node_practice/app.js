var dbmanager = require('./dbmanager.js');
db = dbmanager.getDB(beacon);

var date3 = '22 Jul 2015 00:00:00 GMT+0900';
var date4 = '23 Jul 2015 00:00:00 GMT+0900';
var d3 = Date.parse(date3);
var d4 = Date.parse(date4);
condition = "Timestamp >= " + d3 + " AND Timestamp <= " + d4
dbmanager.getBeaconData(db, iBeacon, condtion, function () {
    if (rows.length != 0) {
        rows.forEach(function (row) {
            //print out results
            console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
        });
    }
});