var noble = require('noble');
//var device_table = 
//var discoverFlag = 0;
var logQueue;//queue
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
    //var localName = advertisement.localName;
    /*
    var macAddress = peripheral.uuid;
    var rss = peripheral.rssi;
    var now = new Date();
    console.log('found device: ', macAddress,' ', rss, ' ',
        now.getFullYear + (now.getMonth() + 1) + now.getDate() + " " 
            + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
     * */
    /*
    여기서 db에 넣는 함수를 부르자. 너무 느린데..?  -> 해결책
    arraylist에 or queue(선입선출)에 macAddress,rss,timestamp를 저장하자.
    그 queue가 비어있지 않으면 db에 저장하는 함수를 scanning 주기적으로 하는 시간에 따라서
    부르자. 그 함수에서는 그 때 queue에 있는 개수만큼 db에 저장하고 queue에서 빼낸다.
    */
    if (peripheral) {
        console.log("peripheral discoverd: " + peripheral.uuid + "\t" + peripheral.rssi);
    }
    var ib = new ibeacon(peripheral.uuid);
    peripheral.on('rssiUpdate', writeout); //ib.archiveRSSI);//updateRSSI
});

function writeout(rssi) {
    console.log(rssi);
}

function ibeacon(uuid){
    var id = uuid;
    this.get_uuid = function (){
        return this.id;
    }
};

ibeacon.prototype.archiveRSSI = function (rssi) {
    console.log(rssi);
};

setInterval(function () {
    peripheral.updateRssi();//다시 scanning
    //peripheral.discoverServices();//10초에 한번 씩 Services를 discover
}, 2000);

/*
 * 생성자
var ibeacon = {
    name: '',
    cb: function (rssi) {
        //this.name
    }
};
*/

/*
function updateRSSI (rssi) {
    console.log(rssi);
        //
}
    console.log('peripheral discovered (' + peripheral.uuid +
              ' with address <' + peripheral.address + ', ' + peripheral.addressType + '>, RSSI ' + peripheral.rssi + ':');
});
 * */
/*
setInterval(function () {
    noble.startScanning();//다시 scanning
    //peripheral.discoverServices();//10초에 한번 씩 Services를 discover
}, 2000);


var ibeacons = {
    "MAC" : true,
    "MAC2" : false
}
*/
//Object.getOwnPropertyNames();
/*
 * ibeacon들의 정보를 가지고 있는 json object를 처음에 불러와서
 * scan한 beacon 각각의 이름과 json object의 이름(key)과 match하고 value가 true면 
 * flag를 true로 해둬서 flag가 1인
 * db에 저장
 * /

//두 개 이상의 peripheral을 discover할 수 있나??