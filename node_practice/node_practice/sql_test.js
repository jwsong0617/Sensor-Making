﻿var fs = require("fs");
var dbfile = "./beacon.db";
var sqlite3 = require("sqlite3").verbose();

//only continue if the database exists
fs.exists(dbfile, function (exists) {
    if (exists) {
        //open the database
        var db = new sqlite3.Database(dbfile);
        db.serialize(function () {
            var stmt = "SELECT * from IBEACON where ";
            //UUID선택
            //var condition = "UUID = 'e2c56db5dffb48d2b060d0f5a71096e0'";
            
            //거리 선택
            var a = 2
            var b = 4
            //2~4미터 사이 거리
            var condition = "Distance >= a && Distance <= b";
            
            //구간 선택
            /*
            var date1 = "22" + "/" + "07" + "/" + "2015";
            var date2 = "23" + "/" + "07" + "/" + "2015";
            var d1 = new Date(date1).getTime();
            var d2 = new Date(date2).getTime();
            var condition = "row.Timestamp > d1 && row.Timestamp <d2";
            */
            //사용자에게 입력받은 조건
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
 * 입력받는 시나리오
 * 구간을 입력받는다
 *  a와 b사이 구간
 *  입력값은 년도/월/일/시간  
 * UUID를 입력받는다.
 *  입력값은 UUID값
 * 거리를 입력받는다.
 *  입력값은 구간(x~y미터 사이)