describe('VersionCompare', function() {
  it('handles compares', function() {
  
    VersionCompare.compare("1.7.1", "1.7.10").should.be.lessThan(0);
    VersionCompare.compare("1.7.2", "1.7.10").should.be.lessThan(0);
    VersionCompare.compare("1.6.1", "1.7.10").should.be.lessThan(0);
    VersionCompare.compare("1.6.20", "1.7.10").should.be.lessThan(0);
    VersionCompare.compare("1.7.1", "1.7.10").should.be.lessThan(0);
    VersionCompare.compare("1.7", "1.7.0").should.be.lessThan(0);
    VersionCompare.compare("1.7", "1.8.0").should.be.lessThan(0);

    VersionCompare.compare("1.7.2", "1.7.10b", {lexicographical: true}).should.be.greaterThan(0);
    VersionCompare.compare("1.7.10", "1.7.1").should.be.greaterThan(0);
    VersionCompare.compare("1.7.10", "1.6.1").should.be.greaterThan(0);
    VersionCompare.compare("1.7.10", "1.6.20").should.be.greaterThan(0);
    VersionCompare.compare("1.7.0", "1.7").should.be.greaterThan(0);
    VersionCompare.compare("1.8.0", "1.7").should.be.greaterThan(0);

    VersionCompare.compare("1.7.10", "1.7.10").should.equal(0);
    VersionCompare.compare("1.7", "1.7").should.equal(0);
    VersionCompare.compare("1.7", "1.7.0", {zeroExtend: true}).should.equal(0);

    VersionCompare.compare("1.7", "1..7").should.be.NaN;
    VersionCompare.compare("1.7", "Bad").should.be.NaN;
    VersionCompare.compare("1..7", "1.7").should.be.NaN;
    VersionCompare.compare("Bad", "1.7").should.be.NaN;

    VersionCompare.matches("1.6", "1.7").should.be.false;
    VersionCompare.matches("1.7", "1.7").should.be.true;
    VersionCompare.matches("1.8", "1.7").should.be.false;

    VersionCompare.gt("1.6", "1.7").should.be.false;
    VersionCompare.gt("1.7", "1.7").should.be.false;
    VersionCompare.gt("1.8", "1.7").should.be.true;

    VersionCompare.gte("1.6", "1.7").should.be.false;
    VersionCompare.gte("1.7", "1.7").should.be.true;
    VersionCompare.gte("1.8", "1.7").should.be.true;

    VersionCompare.lt("1.6", "1.7").should.be.true;
    VersionCompare.lt("1.7", "1.7").should.be.false;
    VersionCompare.lt("1.8", "1.7").should.be.false;

    VersionCompare.lte("1.6", "1.7").should.be.true;
    VersionCompare.lte("1.7", "1.7").should.be.true;
    VersionCompare.lte("1.8", "1.7").should.be.false;
    
    VersionCompare.matches("1.035", "1.35").should.be.true;
    VersionCompare.matches("1.035", "1.35.0", {zeroExtend: true}).should.be.true;
    VersionCompare.lt("1.035", "1.35.1").should.be.true;
    
  
  });
});
