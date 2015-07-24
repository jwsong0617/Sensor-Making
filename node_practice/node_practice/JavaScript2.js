/*
 * var stmt = "SELECT Timestamp,UUID,Distance from IBEACON where ";
console.log(stmt);
var condition = " UUID = 'e2c56db5dffb48d2b060d0f5a71096e0'";
var a = 2
var b = 4
var condition = "Distance >= "+a+" & Distance <= "+ b;
stmt2 = stmt + condition;
 */
var date1 = "07" + "-" + "22" + "-" + "2015";
var date2 = "07" + "-" + "23" + "-" + "2015";
var d1 = new Date(date1).getTime();
var d2 = new Date(date2).getTime();
console.log(date1);
console.log(date2);
console.log(d1);
console.log(d2);