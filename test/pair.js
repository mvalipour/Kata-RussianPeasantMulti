var expect = require("chai").expect;
var pair = require('../src/peasant/pair');

describe('pair', function() {
   describe('.shift()', function() {
       it('returns correct output for even left', function(){
           var p = new pair(18, 23);
           var res = p.shift();

           expect(res.left).to.equal(9);
           expect(res.right).to.equal(46);
       });

       it('returns correct output for odd left', function(){
           var p = new pair(9, 46);
           var res = p.shift();

           expect(res.left).to.equal(4);
           expect(res.right).to.equal(92);
       });
   });
});
