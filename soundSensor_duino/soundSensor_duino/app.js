var dbmanager = require('./dbmanager.js');
var soundSensor = require('./soundSensor.js');

dbmanager.create('sound', 'sound');
dbmanager.list();
dbmanager.inquire();
dbmanager.inquire('Timestamp == 1438574479914');

soundSensor.addSensorListener(function (volume, timestamp) {
    dbmanager.save(timestamp,volume);
});

setTimeout(function () {
    soundSensor.removeSoundListener();
}, 5000);