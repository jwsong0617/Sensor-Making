var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();
var database = null;
var table = '';

/**
 * check whether database is existed
 * 
 * @return true when it is existed or false.
 */
exports.hasDB = function () {
    var dbfile = './sound.db';
    var exists = fs.existsSync(dbfile);
    return exists;
}
exports.createFile = function () {
    var dbfile = './sound.db';
    console.log("Creating DB file.");
    fs.openSync(dbfile, "w");
    console.log("Done.");
    console.log("Getting DB file.");
    database = new sqlite3.Database(dbfile);
}
exports.openFile = function () {
    var dbfile = './sound.db';
    console.log("Getting DB file.");
    database = new sqlite3.Database(dbfile);
}
exports.createTable = function (defaultTableName) {
    var query = "CREATE TABLE IF NOT EXISTS " + defaultTableName + " (Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP PRIMARY KEY NOT NULL,volume INTEGER NOT NULL)";
    database.run(query);
    table = defaultTableName;
    console.log(defaultTableName + ' created');
}
/**
 * Insert an ibeacon observation into DB.
 * 
 * @param {string} timestamp the timestamp observed
 * @param {string} uuid ibeacon unique ID
 * @param {Number} distance measured distance
 */
exports.insert = function (timestamp, volume) {
    database.serialize(function () {
        var query = "INSERT INTO " + table + "(Timestamp,volume) VALUES (?,?)";
        var stmt = database.prepare(query);
        stmt.run(timestamp, volume, function () {
            console.log(timestamp + ", " + volume);
        });
        stmt.finalize();
    });
}
exports.showTableNames = function () {
    database.all("SELECT name FROM sqlite_master WHERE type = 'table'", function (err, rows) {
        if (err) throw err;
        if (rows.length != 0) {
            rows.forEach(function (row) {
                console.log('table name: ' + row.name);
            });
        }
    });
}
exports.getTableName = function () {
    if (table == '')
        console.log('Table is not loaded');
    else {
        console.log('Table ' + table + ' loaded');
        return table;
    }
}
exports.setTableName = function (tableName) {
    if (typeof tableName === 'string')
        table = tableName;
}
exports.getDBType = function () {
    return 'sound';
}
exports.querying = function (callback, condition) {
    database.serialize(function () {
        //condition은 사용자에게 입력받은 조건(where절)
        if (typeof condition === 'string') {
            var stmt = "SELECT * from " + table + " where " + condition;
        }
        else {
            var stmt = "SELECT * from " + table;
        }
        database.all(stmt, function (err, rows) {
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
exports.closeDB = function () {
    database.close();
}