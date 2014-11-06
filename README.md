## version_compare [![Build Status](https://travis-ci.org/gabe0x02/version_compare.svg?branch=master)](https://travis-ci.org/gabe0x02/version_compare)
===============

simple tool to compare version strings


####Node
'''
vc = require('./version_compare')
vc.matches('1.0', '1.1') ==> false
vc.matches('1.0', '1.0') ==> true
vc.compare('1.0', '1.1') ==> -1
vc.gt('1.0', '1.1') ==> false
vc.gte('1.0', '1.1') ==> false
vc.lt('1.0', '1.1') ==> true
vc.lte('1.0', '1.1') ==> true
'''

####Browser

###Credit:
This repo is based off of source found here: [http://stackoverflow.com/questions/6832596/how-to-compare-software-version-number-using-js-only-number]. 

