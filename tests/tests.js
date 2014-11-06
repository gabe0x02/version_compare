var should = require('should');
var vComp = require('../version_compare');

describe('My module', function() {
  it('handles compares', function() {
  
    vComp.compare("1.7.1", "1.7.10").should.be.lessThan(0);
    vComp.compare("1.7.2", "1.7.10").should.be.lessThan(0);
    vComp.compare("1.6.1", "1.7.10").should.be.lessThan(0);
    vComp.compare("1.6.20", "1.7.10").should.be.lessThan(0);
    vComp.compare("1.7.1", "1.7.10").should.be.lessThan(0);
    vComp.compare("1.7", "1.7.0").should.be.lessThan(0);
    vComp.compare("1.7", "1.8.0").should.be.lessThan(0);

    vComp.compare("1.7.2", "1.7.10b", {lexicographical: true}).should.be.greaterThan(0);
    vComp.compare("1.7.10", "1.7.1").should.be.greaterThan(0);
    vComp.compare("1.7.10", "1.6.1").should.be.greaterThan(0);
    vComp.compare("1.7.10", "1.6.20").should.be.greaterThan(0);
    vComp.compare("1.7.0", "1.7").should.be.greaterThan(0);
    vComp.compare("1.8.0", "1.7").should.be.greaterThan(0);

    vComp.compare("1.7.10", "1.7.10").should.equal(0);
    vComp.compare("1.7", "1.7").should.equal(0);
    vComp.compare("1.7", "1.7.0", {zeroExtend: true}).should.equal(0);

    vComp.compare("1.7", "1..7").should.be.NaN;
    vComp.compare("1.7", "Bad").should.be.NaN;
    vComp.compare("1..7", "1.7").should.be.NaN;
    vComp.compare("Bad", "1.7").should.be.NaN;

    vComp.matches("1.6", "1.7").should.be.false;
    vComp.matches("1.7", "1.7").should.be.true;
    vComp.matches("1.8", "1.7").should.be.false;

    vComp.gt("1.6", "1.7").should.be.false;
    vComp.gt("1.7", "1.7").should.be.false;
    vComp.gt("1.8", "1.7").should.be.true;

    vComp.gte("1.6", "1.7").should.be.false;
    vComp.gte("1.7", "1.7").should.be.true;
    vComp.gte("1.8", "1.7").should.be.true;

    vComp.lt("1.6", "1.7").should.be.true;
    vComp.lt("1.7", "1.7").should.be.false;
    vComp.lt("1.8", "1.7").should.be.false;

    vComp.lte("1.6", "1.7").should.be.true;
    vComp.lte("1.7", "1.7").should.be.true;
    vComp.lte("1.8", "1.7").should.be.false;
  
  });
});
