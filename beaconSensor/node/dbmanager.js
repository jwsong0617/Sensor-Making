var database = null;
var table = '';
var databaseType = '';
//var dbTable = {} // hash table

exports.create = function (type,tableName, scb, ecb) {
    if (type == 'ibeacon') database = require('./ibeaconDB.js');
    if (type == 'distance') database = require('./distanceDB.js');
    if (type == 'sound') database = require('./soundDB.js');
    
    if (!database.hasDB())
        database.createFile(); // data base file creation
    else if (database.hasDB())
        database.openFile();
    //if (!database.hasTable())
    database.createTable(tableName);// data base table creation if not exists    
    /*
    if (error && ecb != null)
        ecb('Unknown Error');
    */
    table = database.getTableName();
    databaseType = database.getDBType();
    //dbTable[type] = tableName    
}

exports.save = function(timestamp,obj,tableName,cb) {
    if (typeof tableName === 'string')
        database.setTableName(tableName)        
    if (databaseType == '')
        cb('error');
    if (databaseType == 'ibeacon')
        database.insert(timestamp, obj.uuid, obj.accuracy);
}

exports.list = function (){
    database.showTableNames();
}
exports.inquire = function (condition, tableName, cb) {
    if (typeof tableName === 'string')
        database.setTableName(tableName)
    if (typeof condition === 'string') {
        if (databaseType == 'ibeacon') {
            database.querying(function (rows) {
                if (rows.length != 0) {
                    rows.forEach(function (row) {
                        //print out results
                        console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
                    });
                }
            },condition);
        }
    }
    else {
        if (databaseType == 'ibeacon') {
            database.querying(function (rows) {
                if (rows.length != 0) {
                    rows.forEach(function (row) {
                        //print out results
                        console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
                    });
                }
            });
        }
    }
}
exports.close = function (){
    database.closeDB();
    console.log('database closed');
}