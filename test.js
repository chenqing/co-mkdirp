var mkdirp = require('./');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');

chai.use(require('chai-as-promised'));

describe('mkdirp() test', function() {

	it('should create success if path right', function() {
		return mkdirp('testpath/testsubpath1').should.eventually.resolve;
	});

	after(function() {
		fs.rmdirSync('testpath/testsubpath1');
		fs.rmdirSync('testpath');
	});
});


describe('mkdirp.sync() test', function() {

	it('should create success if path right', function() {
		return expect(mkdirp.sync('testpath/testsubpath2')).to.eventually.be.a('string');
	});

	after(function() {
		fs.rmdirSync('testpath/testsubpath2');
		fs.rmdirSync('testpath');
	});
});