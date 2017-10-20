var should = require('should');
var qs = require('../querystring');
var nqs = require('querystring');

describe("Stringify", function () {
  describe("stringify({ key1: 'foo', key2: false, key3: 2 })", function () {
    it("should parse ", function () {
      qs.stringify({ key1: 'foo', key2: false, key3: 2 }).should.be.exactly(nqs.stringify({ key1: 'foo', key2: false, key3: 2 }));
    });
  });
  describe("stringify({ key1: 'foo', key2: false, key3: [ 2, true ] })", function () {
    it("should parse different type to string", function () {
      qs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ] }).should.be.exactly(nqs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ] }));
    });
  });
  describe("stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: { a: 1 } })", function () {
    it("object should be parsed to empty string", function () {
      qs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: { a: 1 } }).should.be.exactly(nqs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: { a: 1 } }));
    });
  });
  describe("stringify({ key1: 'foo', key2: false, key3: [ 2, true, [ 'axi' ] ] })", function () {
    it("array in arrry should be parsed to empty string", function () {
      qs.stringify({ key1: 'foo', key2: false, key3: [ 2, true, [ 'axi' ] ] }).should.be.exactly(nqs.stringify({ key1: 'foo', key2: false, key3: [ 2, true, [ 'axi' ] ] }));
    });
  });
  describe("stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: function() {} })", function () {
    it("function should be parsed to empty string", function () {
      qs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: function() {} }).should.be.exactly(nqs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: function() {} }));
    });
  });
  describe("stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: function() {} }, ';', ':')", function () {
    it("function should be parsed to empty string", function () {
      qs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: function() {} }, ';', ':').should.be.exactly(nqs.stringify({ key1: 'foo', key2: false, key3: [ 2, true ], key4: function() {} }, ';', ':'));
    });
  });
});
