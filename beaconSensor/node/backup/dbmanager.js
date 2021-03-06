﻿var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();

exports.getDataBase = function (type) {
    if (type == 'ibeacon') return new ibeaconDB('ibeacon');
    else if (type == 'distance') return new distanceDB();
}

exports.closeDataBase = function (database) {
    database.close();
    console.log('database closed');
}

function ibeaconDB(defaultTableName) {
    var self = this;
    var dbfile = './ibeacon.db';
    var exists = fs.existsSync(dbfile);
    var ibeaconDataBase;
    if (!exists) {
        console.log("Creating DB file.");
        fs.openSync(dbfile, "w");
        console.log("Done.");
        console.log("Getting DB file.");
        ibeaconDataBase = new sqlite3.Database(dbfile);
        
    }    
    else if (exists) {
        //open the database
        console.log("Getting DB file.");
        ibeaconDataBase = new sqlite3.Database(dbfile);
        
    }
    this.database = ibeaconDataBase;
    var query = "CREATE TABLE IF NOT EXISTS " + defaultTableName + " (Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP PRIMARY KEY NOT NULL,UUID TEXT NOT NULL,Distance REAL NOT NULL)";
    this.database.run(query);
    this.defaultTable = defaultTableName;
}
ibeaconDB.prototype.showTableNames = function () {
    this.database.all("SELECT name FROM sqlite_master WHERE type = 'table'", function (err, rows) {
        if (err) throw err;
        if (rows.length != 0) {
            rows.forEach(function (row) {
                console.log('table name: ' + row.name);
            });
        }
    });
}

ibeaconDB.prototype.createTable = function (name) {
    var query = "CREATE TABLE " + name + " (Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP PRIMARY KEY NOT NULL,UUID TEXT NOT NULL,Distance REAL NOT NULL)";
    this.database.run(query);
}

ibeaconDB.prototype.getQueryResult = function (callback, condition, tableName) {
    var db = this.database;
    var table = this.defaultTable;
    db.serialize(function () {
        if (typeof tableName === 'string') {
            table = tableName;
        }
        //condition은 사용자에게 입력받은 조건(where절)
        if (typeof condition === 'string') {
            var stmt = "SELECT * from " + table + " where " + condition;
            //stmt = stmt + condition;      
        }
        else {
            var stmt = "SELECT * from " + table;
        }
        db.all(stmt, function (err, rows) {
            if (err) throw err;
            if (rows.length != 0) {
                callback(rows);//rows는 array              
            }
            else {
                console.log("Data dose not exists");
            }
        });
    })
}
//insert BeaconData
ibeaconDB.prototype.insertSignalData = function (table, timestamp, uuid, distance) {
    var db = this.database;
    db.serialize(function () {
        var query = "INSERT INTO " + table + "(Timestamp,UUID,Distance) VALUES (?,?,?)";
        var stmt = db.prepare(query);
        stmt.run(timestamp, uuid, distance, function () {
            console.log(timestamp + ", " + uuid + ", " + distance);
        });
        stmt.finalize();
    });
}