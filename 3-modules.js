// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is module (by default)

const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative_flavour');
require('./7-mind_grenade');

sayHi('susan');
sayHi(john);
sayHi(peter);
