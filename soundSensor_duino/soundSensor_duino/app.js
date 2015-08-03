var dbmanager = require('./dbmanager.js');
var distanceSensor = require('./distanceSensor.js');

dbmanager.create('volume', 'volume');
dbmanager.list();
dbmanager.inquire();
dbmanager.inquire('Timestamp == 1438562903378');

distanceSensor.addSensorListener(function (volume, timestamp) {
    dbmanager.save(timestamp,volume);
});

setTimeout(function () {
    distanceSensor.removeDistanceListener();
}, 5000);
