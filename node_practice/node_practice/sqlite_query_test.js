var fs = require("fs");
var dbfile = "./beacon.db";
var sqlite3 = require("sqlite3").verbose();

//only continue if the database exists
fs.exists(dbfile, function (exists) {
    if (exists) {
        //open the database
        var db = new sqlite3.Database(dbfile);
        db.serialize(function () {
            var stmt = "SELECT Timestamp,UUID,Distance from IBEACON where ";
            var condition = "UUID = 'e2c56db5dffb48d2b060d0f5a71096e0'";
            stmt = stmt + condition;
            db.all(stmt, function (err, rows) {
                if (err) throw err;
                if (rows.length != 0) {
                    rows.forEach(function (row) {
                        //print out results
                        console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
                    });                    
                }
                else {
                    console.log("Database dose not exists");
                }
            });
        })
    }
});

/*
db.all(stmt, function (err, rows) {
//rows contain values while errors, well you can figure out.
    console.log(rows.Timestamp,rows.UUID,rows.Distance);
});
*/
