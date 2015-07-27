var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();

//create DB
var exists;
exports.createDBfile = function (filename){
    var dbfile = "./" + filename + ".db";
    var exists = fs.existsSync(dbfile);    
    if (!exists) {
        console.log("Creating DB file.");
        fs.openSync(dbfile, "w");
    }
    if (exists) {
        console.log("DB file already"+filename+" exists")
    }
}
//get DB
exports.getDB = function (filename){
    var dbfile = "./" + filename+".db";
    var exists = fs.existsSync(dbfile);
    if(exists){    
        //open the database
        var db = new sqlite3.Database(dbfile);
        return db;
        }            
    else {
        console.log("Database file does not exists")
    }
}
//create BeaconTable
exports.createBeaconTable = function (db, name){
    if(exists){
        query = "CREATE TABLE "+name+" (Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP PRIMARY KEY NOT NULL,UUID TEXT NOT NULL,Distance REAL NOT NULL)"
        db.run(query);
    }
}

//insert BeaconData
exports.insertBeaconData = function (db,table,timestamp,uuid,distance){
    if (exists) {
        db.serialize(function () {
            var query = "INSERT INTO "+table+"(Timestamp,UUID,Distance) VALUES (?,?,?)";
            var stmt = db.prepare(query);
            stmt.run(timestamp,uuid,distance, function () {
                console.log(timestamp+", "+uuid+", "+distance);
            });
            stmt.finalize();
        });
    }
}

//get data depends on condition
exports.getBeaconData = function (db,table,condition,callback) {
    if (exists) {
        db.serialize(function () {
            //condition은 사용자에게 입력받은 조건(where절)
            var stmt = "SELECT * from "+table+" where ";
            stmt = stmt + condition;
            db.all(stmt, function (err, rows) {
                if (err) throw err;
                if (rows.length != 0) {
                    rows.forEach(function (row) {
                        //print out results
                        console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
                    });
                    callback(rows);//rows는 array
                }
                else {
                    console.log("Data dose not exists");
                }
            });
        })
    }
    else {
        console.log("Database file does not exists")
    }
}
/*
exports.setBeaconDataArray = function (rows) {
    if (exists) {
        if (rows.length != 0) {
            var array = new Array(new Array(rows.length), new Array(3));
            var i = 0;
            var j = 0;
            rows.forEach(function (row) {
                array[i][0] = row.Timestamp;
                array[i][1] = row.UUID
                array[i][2] = row.Distance;
                i++;
                //print out results
                //console.log(row.Timestamp + " " + row.UUID + ", " + row.Distance);
            });
        }
    }     
}
*/
//close db
exports.closeDB = function (db){
    db.close();
}