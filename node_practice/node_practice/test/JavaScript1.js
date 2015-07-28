/*
process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + typeof (item) + ' : ', item);
    if (item == 'exit') {
        var exitTime = Number(process.argv[index + 1]);
        setTimeout(function () {
            process.exit();
        }, exitTime)
    }
});

console.log('process.env:', process.env);
console.log('process.version:', process.version);
console.log('process.versions:', process.versions);
console.log('process.arch:', process.arch);
console.log('process.platform:', process.platform);
console.log('process.memoryUsage():', process.memoryUsage());
console.log('process.uptime():', process.uptime());
*/
/*
var mymodule = require('./JavaScript2.js');
console.log('abs(-350) = %d', mymodule.abs(350));
console.log('circleAread(3) = %d', mymodule.circleArea(3));
 * */
/*
var os = require('os')
console.log(os.hostname());
console.log(os.networkInterfaces());

var url = require('url');
var sensor_making = url.parse('https://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log(sensor_making)
console.log(url.format(sensor_making))

var querystring = require('querystring');

console.log(querystring.parse(sensor_making.query));
console.log(url.parse('https://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9', true));

var util = require('util');
var data = util.format("%d + %d = %d", 52, 273, 52 + 273);
console.log(data);
*/
/*
var fs = require('fs');
var text = fs.readFileSync('testtext.txt', 'utf8');
console.log(text);

fs.readFile('testtext5.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error)
    } else {
        console.log(data);
    }
});

fs.writeFile('testtext2.txt', data, 'utf8', function (error){
console.log('writing complete!');
})

var data = 'hello nodejs2';

try {
    fs.readFileSync('testtext23.txt','utf8');
    console.log('sync writing complete');
}
catch (e) {
console.log(e);
}


process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});

setTimeout(function () {
    console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');

// Start reading from stdin so we don't exit.
process.stdin.resume();

process.on('SIGINT', function () {
    console.log('Got SIGINT.  Press Control-D to exit.');
});

process.on('exit', function(){
    console.log("ㅂㅂㅇ");
})
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.exit();
 * 
var custom = new process.EventEmitter();
custom.on('tick', function () {
    console.log('event generated');
});

custom.emit('tick');
 * */
var fs = require('fs');
var http = require('http');
//var server = http.createServer();

/*
server.listen(52273, function () {
    console.log("server running");
});
server.on('request', function () {
    console.log("request on");
})
setInterval(function () {
    server.close();
    console.log("server closed");
},3000);
 * 

http.createServer(function (request, response) {
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at 52273');
});
*/
http.createServer(function (request, response) {
    var date = new Date();
    date.setDate(date.getDate() + 7);
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breadkfast=toast;Expires = date.toUTCString();',
            'dinner=chicken'
        ]
    });
    response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function () {
    console.log('Server running');
});