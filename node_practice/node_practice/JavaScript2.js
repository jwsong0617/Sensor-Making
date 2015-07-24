var stmt = "SELECT Timestamp,UUID,Distance from IBEACON where";
console.log(stmt);
var condition = " UUID = 'e2c56db5dffb48d2b060d0f5a71096e0'";
stmt2 = stmt + condition;
console.log(stmt2);