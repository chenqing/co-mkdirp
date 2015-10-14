/*
 * a promise wrapper for mkdirp
 * 
 */
var mkdirp = require('mkdirp');

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

function mkdirP() {
	var args = Array.prototype.slice.call(arguments, 0);
	var that = this;


	return new Promise(function(resolve, reject) {
		var callback = function(err) {
			if (err) {
				reject(err);
			}
			resolve();
		};
		args.push(callback);

		mkdirp.apply(that, args);
	});
}

mkdirP.sync = function() {
		var args = Array.prototype.slice.call(arguments, 0);
		var that = this;
		return new Promise(function(resolve, reject) {
				try {
					resolve(mkdirp.sync.apply(that, args));
				} catch (err) {
					reject(err);
				}

			});
		}