﻿var Bleacon = require('bleacon');
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0'

var fs = require("fs");
var dbfile = "./beacon.db";
var exists = fs.existsSync(dbfile);

if (!exists) {
    console.log("Creating DB file.");
    fs.openSync(dbfile, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbfile);


Bleacon.startScanning(uuid);

Bleacon.on('discover', function (bleacon) {
    if (bleacon) {
        //console.log("bleacon discoverd: " + bleacon.uuid + "\t" + bleacon.rssi + "\t" + bleacon.accuracy);
        db.serialize(function () {
            if (!exists) {
                db.run("CREATE TABLE IBEACON (timestamp TEXT PRIMARY KEY,uuid TEXT,distance REAL)");
            }
            
            var stmt = db.prepare("INSERT INTO IBEACON VALUES (?,?,?)");
            var d = new Date();
            var n = d.toLocaleTimeString();  
            stmt.run(n,bleacon.uuid,bleacon.rssi);
            //Insert random data
            /*
            var rnd;
            for (var i = 0; i < 10; i++) {
                rnd = Math.floor(Math.random() * 10000000);
                stmt.run("Thing #" + rnd);
            }
            */
            stmt.finalize();

            db.each("SELECT timestamp,uuid,distance FROM IBEACON", function (err, row) {
                console.log(row.timestamp, row.uuid, row.distance);
            });
        });

    }
});


/*
db.serialize(function () {
    if (!exists) {
        db.run("CREATE TABLE IBEACON (thing TEXT)");
    }
    
    var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");
    
    //Insert random data
    var rnd;
    for (var i = 0; i < 10; i++) {
        rnd = Math.floor(Math.random() * 10000000);
        stmt.run("Thing #" + rnd);
    }
    
    stmt.finalize();
    db.each("SELECT rowid AS id, thing FROM Stuff", function (err, row) {
        console.log(row.id + ": " + row.thing);
    });
});
*/