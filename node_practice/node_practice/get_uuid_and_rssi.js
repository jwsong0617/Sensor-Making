var noble = require('noble');
//var device_table = 
//var discoverFlag = 0;
noble.on('stateChange', function (state) {
    if (state === 'poweredOn') {
        noble.startScanning(); //any service UUID, no duplicates
    } else {
        noble.stopScanning();
    }
});

noble.on('discover', function (peripheral) {
    
    //device_table에 uuid랑 true/false check
    /*
    if () {
        for(

    }
    else () {

    }
    */
    var macAddress = peripheral.uuid;
    var localName = advertisement.localName;
    var rss = peripheral.rssi;    
    console.log('found device: ', macAdress, ' ', localName, ' ',rss);
});
/*
    console.log('peripheral discovered (' + peripheral.uuid +
              ' with address <' + peripheral.address + ', ' + peripheral.addressType + '>, RSSI ' + peripheral.rssi + ':');
});
 * */

setInterval(function () {
    noble.startScanning();//다시 scanning
    //peripheral.discoverServices();//10초에 한번 씩 Services를 discover
}, 2000);

//두 개 이상의 peripheral을 discover할 수 있나??