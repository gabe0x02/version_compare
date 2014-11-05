function assert(x) {
    if (!x) {
        console.error("Assert failed");
        throw new Exception("Assert failed");
        // debugger;
    }
}

var vComp = require('../version_compare');

assert(vComp.compare("1.7.1", "1.7.10") < 0);
assert(vComp.compare("1.7.2", "1.7.10") < 0);
assert(vComp.compare("1.6.1", "1.7.10") < 0);
assert(vComp.compare("1.6.20", "1.7.10") < 0);
assert(vComp.compare("1.7.1", "1.7.10") < 0);
assert(vComp.compare("1.7", "1.7.0") < 0);
assert(vComp.compare("1.7", "1.8.0") < 0);

assert(vComp.compare("1.7.2", "1.7.10b", {lexicographical: true}) > 0);
assert(vComp.compare("1.7.10", "1.7.1") > 0);
assert(vComp.compare("1.7.10", "1.6.1") > 0);
assert(vComp.compare("1.7.10", "1.6.20") > 0);
assert(vComp.compare("1.7.0", "1.7") > 0);
assert(vComp.compare("1.8.0", "1.7") > 0);

assert(vComp.compare("1.7.10", "1.7.10") === 0);
assert(vComp.compare("1.7", "1.7") === 0);
assert(vComp.compare("1.7", "1.7.0", {zeroExtend: true}) === 0);

assert(isNaN(vComp.compare("1.7", "1..7")));
assert(isNaN(vComp.compare("1.7", "Bad")));
assert(isNaN(vComp.compare("1..7", "1.7")));
assert(isNaN(vComp.compare("Bad", "1.7")));

assert(!vComp.matches("1.6", "1.7"));
assert( vComp.matches("1.7", "1.7"));
assert(!vComp.matches("1.8", "1.7"));

assert(!vComp.gt("1.6", "1.7"));
assert(!vComp.gt("1.7", "1.7"));
assert( vComp.gt("1.8", "1.7"));

assert(!vComp.gte("1.6", "1.7"));
assert( vComp.gte("1.7", "1.7"));
assert( vComp.gte("1.8", "1.7"));

assert( vComp.lt("1.6", "1.7"));
assert(!vComp.lt("1.7", "1.7"));
assert(!vComp.lt("1.8", "1.7"));

assert( vComp.lte("1.6", "1.7"));
assert( vComp.lte("1.7", "1.7"));
assert(!vComp.lte("1.8", "1.7"));




console.error("All done");
