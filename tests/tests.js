
var tape = require('tape');
var vComp = require('../version_compare');

tape(function(test){
  test.true(vComp.compare("1.7.1", "1.7.10") < 0);
  test.true(vComp.compare("1.7.2", "1.7.10") < 0);
  test.true(vComp.compare("1.6.1", "1.7.10") < 0);
  test.true(vComp.compare("1.6.20", "1.7.10") < 0);
  test.true(vComp.compare("1.7.1", "1.7.10") < 0);
  test.true(vComp.compare("1.7", "1.7.0") < 0);
  test.true(vComp.compare("1.7", "1.8.0") < 0);

  test.true(vComp.compare("1.7.2", "1.7.10b", {lexicographical: true}) > 0);
  test.true(vComp.compare("1.7.10", "1.7.1") > 0);
  test.true(vComp.compare("1.7.10", "1.6.1") > 0);
  test.true(vComp.compare("1.7.10", "1.6.20") > 0);
  test.true(vComp.compare("1.7.0", "1.7") > 0);
  test.true(vComp.compare("1.8.0", "1.7") > 0);

  test.true(vComp.compare("1.7.10", "1.7.10") === 0);
  test.true(vComp.compare("1.7", "1.7") === 0);
  test.true(vComp.compare("1.7", "1.7.0", {zeroExtend: true}) === 0);

  test.true(isNaN(vComp.compare("1.7", "1..7")));
  test.true(isNaN(vComp.compare("1.7", "Bad")));
  test.true(isNaN(vComp.compare("1..7", "1.7")));
  test.true(isNaN(vComp.compare("Bad", "1.7")));

  test.false(vComp.matches("1.6", "1.7"));
  test.true( vComp.matches("1.7", "1.7"));
  test.false(vComp.matches("1.8", "1.7"));

  test.false(vComp.gt("1.6", "1.7"));
  test.false(vComp.gt("1.7", "1.7"));
  test.true( vComp.gt("1.8", "1.7"));

  test.false(vComp.gte("1.6", "1.7"));
  test.true( vComp.gte("1.7", "1.7"));
  test.true( vComp.gte("1.8", "1.7"));

  test.true( vComp.lt("1.6", "1.7"));
  test.false(vComp.lt("1.7", "1.7"));
  test.false(vComp.lt("1.8", "1.7"));

  test.true( vComp.lte("1.6", "1.7"));
  test.true( vComp.lte("1.7", "1.7"));
  test.false(vComp.lte("1.8", "1.7"));
  
  test.end();
});
