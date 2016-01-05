/*global describe, it*/
'use strict';

let expect = require('expect.js');

let Foo = require('./../src/js/foo');

describe('Foo', function() {

	it('should initialise', function() {
		expect(Foo()).to.be('bar');
	});
});
