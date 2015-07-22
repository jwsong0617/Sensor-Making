﻿/*var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function () {
    db.run("CREATE TABLE lorem (info TEXT)");
    
    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
    
    db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
*/
var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);

if (!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function () {
    if (!exists) {
        db.run("CREATE TABLE Stuff (thing TEXT)");
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

db.close();