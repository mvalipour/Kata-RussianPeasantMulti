var multiplier = require('./peasant/multiplier');

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);

var result = multiplier(x, y);
console.log('Result: ', result);
