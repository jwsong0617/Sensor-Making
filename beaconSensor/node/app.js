﻿var dbmanager = require('./dbmanager.js');
var ibeacon = require('./ibeacon.js');

dbmanager.create('ibeacon', 'ibeacon')
/*
dbmanager.list();
dbmanager.inquire();
dbmanager.inquire('Timestamp == 1438060516877');
 */
ibeacon.addBeaconListener(function (beacon, timestamp) {
    dbmanager.save(timestamp, beacon);
});
/*
setTimeout(function () {
    ibeacon.removeBeaconListener();
    console.log('Beacon Listener is removed');
}, 5000);
*/