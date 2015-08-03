var dbmanager = require('./dbmanager.js');
var distanceSensor = require('./distanceSensor.js');

dbmanager.create('distance', 'distance');
dbmanager.list();
dbmanager.inquire('Timestamp == 1438562903378');

distanceSensor.addSensorListener(function (cm, timestamp) {
    dbmanager.save(timestamp, cm);
});

setTimeout(function () {
    distanceSensor.removeDistanceListener();
}, 5000);
