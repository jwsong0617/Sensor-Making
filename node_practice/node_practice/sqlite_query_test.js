var fs = require("fs");
var dbfile = "./beacon.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbfile);
setInterval(db.each("SELECT timestamp,uuid,distance FROM IBEACON", function (err, row) {
    console.log(row.timestamp, row.uuid, row.distance);
}), 10000);

