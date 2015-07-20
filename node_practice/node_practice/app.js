
var fs = require('fs');

function executeCallbacks() {
    fs.readdir('.', function (err, filenames) {
        var i;
        for (i = 0; i < filenames.length; i++) {
            (function () {
                var j = i;
                fs.stat('./' + filenames[i], function (err, stats) {
                    console.log(j + ':' + stats.isFile());

                });
            })();
        }
    });
}

executeCallbacks();

/*
 * 그러면 순차적인 i값을 출력하기 위해서는 외부 Callback 실행시 i값을 어딘가에 저장해야 합니다. 
 * 이 예제는 Closure를 생성하여 새로운 Scope를 만들었습니다. 다시말해 즉시실행 함수를 만들었습니다. 
 * 그리고 이 Scope의 j 변수에 i값을 저장하고 내부 Callback 실행시 j를 출력하니 비로소 순차적으로 출력되는 것을 확인할 수 있습니다.
 */

/*
 * 실행할때 순차적으로 출력되지 않는 경우가 있는데 이게 이해가 잘 안됩니다.
 */


/*var arr = []
for (var i = 0; i < 5; i++) {
    arr[i] = function (id) {
        return function () {
            return id;
        }
    }(i);
}
for (var index in arr) {
    console.log(arr[index]());
}
*/

//이 코드는 잘 됩니다.
/*
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.end('<h1>Hello World .. !</h1>');
}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
 * */
//console.log('output: %d', 273);
//console.log('273');
