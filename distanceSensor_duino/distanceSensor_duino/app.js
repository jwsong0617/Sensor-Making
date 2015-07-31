var dbmanager = require('./dbmanager.js');
var distanceSensor = require('./distanceSensor.js');

dbmanager.create('distance', 'distance');
/*
dbmanager.list();
dbmanager.inquire();
dbmanager.inquire();
 */
distanceSensor.addSensorListener(function (cm, timestamp) {
        dbmanager.save(timestamp, cm);
    });

/*
distanceSensor.addDistanceListener(function (cm, timestamp) {
    dbmanager.save(timestamp, cm);
});
*/
setTimeout(function () {
    distanceSensor.removeDistanceListener();
    console.log('Distance Listener is removed');
}, 5000);
