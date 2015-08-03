var dbmanager = require('./dbmanager.js');
var distanceSensor = require('./distanceSensor.js');

dbmanager.create('distance', 'distance');
dbmanager.list();
/*
dbmanager.inquire();
dbmanager.inquire();
*/

distanceSensor.addSensorListener(function (cm, timestamp) {
    dbmanager.save(timestamp, cm);
   // console.log('timestamp: ' + timestamp + ', ' + 'cm: ' + cm);
});

/*
distanceSensor.addSensorListener(function () {
    distanceSensor.addDistanceListener(function (cm, timestamp) {
        dbmanager.save(timestamp, cm);
        console.log('timestamp: ' + timestamp + ', ' + 'cm: ' + cm);
    });
});
*/
/*
distanceSensor.addDistanceListener(function (cm, timestamp) {
    dbmanager.save(timestamp, cm);
});
*/
setTimeout(function () {
    distanceSensor.removeDistanceListener();    
}, 5000);
