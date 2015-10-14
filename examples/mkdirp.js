var mkdirp = require('../');
var co = require('co');

co(function* (){
	var path = 'test/test';
	yield mkdirp(path);
}).catch(function(err){
	console.log(err.stack);
})