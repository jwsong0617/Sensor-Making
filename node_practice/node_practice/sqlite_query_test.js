var fs = require("fs");
var dbfile = "./beacon.db";
var sqlite3 = require("sqlite3").verbose();

//only continue if the database exists
fs.exists(dbfile, function (exists) {
    if (exists) {
        //open the database
        var db = new sqlite3.Database(dbfile);
        db.serialize(function () {
            var stmt = "SELECT Timestamp,UUID,Distance from IBEACON where UUID='e2c56db5dffb48d2b060d0f5a71096e0'";
            db.each(stmt, function (err, rows) {
                //print out results
                console.log(rows.Timestamp + " " + rows.UUID + ", " + rows.Distance);
            });
        });
    }
    else {
        console.log("Database dose not exists");
    }
});

/*
db.all(stmt, function (err, rows) {
//rows contain values while errors, well you can figure out.
    console.log(rows.Timestamp,rows.UUID,rows.Distance);
});
*/
