var fs = require("fs");
var dbfile = "./beacon.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbfile);
setInterval(db.each("SELECT uuid,distance FROM IBEACON", function (err, row) {
    console.log(row.uuid, row.distance);
}), 10000);

