// TODO: migrate to test case

var counter = require('./');
var cnt = counter(10000);

cnt(1);
cnt(1);
cnt(1);

console.log(cnt());

setInterval(function() {
	cnt(1);
}, 2000);

setInterval(function() {
	console.log(cnt());
}, 1000);

setInterval(function() {
	cnt = counter(cnt.toJSON());
}, 4000);