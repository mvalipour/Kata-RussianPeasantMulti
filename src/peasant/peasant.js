var _ = require("underscore");
var pair = require('./pair');

function generate(x, y){
  var p = new pair(x, y);
  var col = [];

  while(p.left >= 1){
    col.push(p);
    p = p.shift();
  }

  return col;
}

function pick(col){
  return _.filter(col, function(p) { return p.left % 2 == 1; });
}

function sum(col){
  return _.reduce(col, function(r, p){ return r + p.right; }, 0);
}

module.exports = {
  generate: generate,
  pick: pick,
  sum: sum
};
