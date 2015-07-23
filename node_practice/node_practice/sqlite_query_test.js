var fs = require("fs");
var dbfile = "./beacon.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbfile);

var stmt = "SELECT Timestamp,UUID,Distance from IBEACON where UUID='e2c56db5dffb48d2b060d0f5a71096e0'";
/*
db.all(stmt, function (err, rows) {
//rows contain values while errors, well you can figure out.
    console.log(rows.Timestamp,rows.UUID,rows.Distance);
});
*/
db.each(stmt, function (err, rows) {
    console.log(rows.Timestamp + " " + rows.UUID + ", " + rows.Distance);
});