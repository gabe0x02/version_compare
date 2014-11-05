function assert(x) {
    if (!x) {
        console.error("Assert failed");
        throw new Exception("Assert failed");
        // debugger;
    }
}

var versionCompare = require('../version_compare');

assert(versionCompare("1.7.1", "1.7.10") < 0);
assert(versionCompare("1.7.2", "1.7.10") < 0);
assert(versionCompare("1.6.1", "1.7.10") < 0);
assert(versionCompare("1.6.20", "1.7.10") < 0);
assert(versionCompare("1.7.1", "1.7.10") < 0);
assert(versionCompare("1.7", "1.7.0") < 0);
assert(versionCompare("1.7", "1.8.0") < 0);

assert(versionCompare("1.7.2", "1.7.10b", {lexicographical: true}) > 0);
assert(versionCompare("1.7.10", "1.7.1") > 0);
assert(versionCompare("1.7.10", "1.6.1") > 0);
assert(versionCompare("1.7.10", "1.6.20") > 0);
assert(versionCompare("1.7.0", "1.7") > 0);
assert(versionCompare("1.8.0", "1.7") > 0);

assert(versionCompare("1.7.10", "1.7.10") === 0);
assert(versionCompare("1.7", "1.7") === 0);
assert(versionCompare("1.7", "1.7.0", {zeroExtend: true}) === 0);

assert(isNaN(versionCompare("1.7", "1..7")));
assert(isNaN(versionCompare("1.7", "Bad")));
assert(isNaN(versionCompare("1..7", "1.7")));
assert(isNaN(versionCompare("Bad", "1.7")));

console.error("All done");
