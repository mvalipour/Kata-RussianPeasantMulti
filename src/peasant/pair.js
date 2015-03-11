function pair(x, y){
  this.left = x;
  this.right = y;
}


pair.prototype.shift = function(){
  return new pair(this.left >> 1, this.right << 1);
};

module.exports = pair;
