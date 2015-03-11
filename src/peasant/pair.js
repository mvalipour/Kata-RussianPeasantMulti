function pair(x, y){
  this.left = x;
  this.right = y;
}


pair.prototype.shift = function(){
  return new pair(Math.floor(this.left / 2), this.right * 2);
};

module.exports = pair;
