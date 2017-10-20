var should = require('should');
var qs = require('../querystring');
var nqs = require('querystring');

should.config.checkProtoEql = false;

describe("Parse", function () {
  describe("parse('key1=string&key2=true&key3=&key4=123')", function () {
    it("should parse different type to string", function () {
      (qs.parse('key1=string&key2=true&key3=123')).should.be.eql(nqs.parse('key1=string&key2=true&key3=123'));
    });
  });
  describe("parse('key1=string&key1=true&key1=123')", function () {
    it("should parse same key to array", function () {
      (qs.parse('key1=string&key1=true&key1=123')).should.be.eql(nqs.parse('key1=string&key1=true&key1=123'));
    });
  });
  describe("parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123')", function () {
    it("should parse same key to array and different type to string", function () {
      (qs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123')).should.be.eql(nqs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123'));
    });
  });
  describe("parse('key1=你好&key2=あい')", function () {
    it("should parse unicode success", function () {
      (qs.parse('key1=你好&key2=あい')).should.be.eql(nqs.parse('key1=你好&key2=あい'));
    });
  });
  describe("parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, { maxKeys: 0 })", function () {
    it("should have maxKeys", function () {
      (qs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 0
      })).should.be.eql(nqs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 0
      }));
    });
  });
  describe("parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, { maxKeys: -1 })", function () {
    it("should have maxKeys", function () {
      (qs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: -1
      })).should.be.eql(nqs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: -1
      }));
    });
  });
  describe("parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, { maxKeys: 1 })", function () {
    it("should have maxKeys", function () {
      (qs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 1
      })).should.be.eql(nqs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 1
      }));
    });
  });
  describe("parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, { maxKeys: 3 })", function () {
    it("should have maxKeys", function () {
      (qs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 3
      })).should.be.eql(nqs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 3
      }));
    });
  });
  describe("parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, { maxKeys: 6 })", function () {
    it("should have maxKeys", function () {
      (qs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 6
      })).should.be.eql(nqs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', null, null, {
        maxKeys: 6
      }));
    });
  });
  describe("parse('key1=string$key1=true$key1=123$key2=string$key3=true$key4=123', '$'", function () {
    it("should have same correct result when input same seq param", function () {
      (qs.parse('key1=string$key1=true$key1=123$key2=string$key3=true$key4=123', '$')).should.be.eql(nqs.parse('key1=string$key1=true$key1=123$key2=string$key3=true$key4=123', '$'));
    });
  });
  describe("parse('key1$string&key1$true&key1$123&key2$string&key3$true&key4$123', null, '$'", function () {
    it("should have same correct result when input same eq param", function () {
      (qs.parse('key1$string&key1$true&key1$123&key2$string&key3$true&key4$123', '&')).should.be.eql(nqs.parse('key1$string&key1$true&key1$123&key2$string&key3$true&key4$123', '&'));
    });
  });
  describe("parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', '$', '-')", function () {
    it("should have same correct result when input same sep and eq param", function () {
      (qs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', '$', '-')).should.be.eql(nqs.parse('key1=string&key1=true&key1=123&key2=string&key3=true&key4=123', '$', '-'));
    });
  });
  describe("parse('key1-string$key1-true$key1-123$key2-string$key3-true$key4-123', '$', '-')", function () {
    it("should have same correct result when input same sep and eq param", function () {
      (qs.parse('key1-string$key1-true$key1-123$key2-string$key3-true$key4-123', '$', '-')).should.be.eql(nqs.parse('key1-string$key1-true$key1-123$key2-string$key3-true$key4-123', '$', '-'));
    });
  });
});