/*global describe, it*/

let expect = require('expect.js');

let foo = require('./../src/js/foo');

describe('Foo', function() {

	it('should initialise', function() {
		expect(foo()).to.be('bar');
	});
});
