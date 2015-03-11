var expect = require("chai").expect;
var pair = require('../src/peasant/pair');
var peasant = require('../src/peasant/peasant');

describe('peasant', function() {

  describe('.generate()', function() {
     describe('for 32 and 10', function() {
         var res = peasant.generate(32, 10);

         it('result should be length = 6', function(){
             expect(res.length).to.equal(6);
         });

         var itemVerifier = function(ix, left, right){
           var node = res[ix - 1];
           expect(node.left).to.equal(left);
           expect(node.right).to.equal(right);
         };

         it('should be 32, 10 for the 1st element.', function(){ itemVerifier(1, 32, 10); });
         it('should be 16, 20 for the 2nd element.', function(){ itemVerifier(2, 16, 20); });
         it('should be 8, 40 for the 3rd element.', function(){ itemVerifier(3, 8, 40); });
         it('should be 4, 80 for the 4th element.', function(){ itemVerifier(4, 4, 80); });
         it('should be 2, 160 for the 5th element.', function(){ itemVerifier(5, 2, 160); });
         it('should be 1, 320 for the 6th element.', function(){ itemVerifier(6, 1, 320); });
     });

     describe('for 18 and 23', function() {
         var res = peasant.generate(18, 23);

         it('result should be length = 5', function(){
             expect(res.length).to.equal(5);
         });

         var itemVerifier = function(ix, left, right){
           var node = res[ix - 1];
           expect(node.left).to.equal(left);
           expect(node.right).to.equal(right);
         };

         it('should be 18, 23 for the 1st element.', function(){ itemVerifier(1, 18, 23); });
         it('should be 9, 46 for the 2nd element.', function(){ itemVerifier(2, 9, 46); });
         it('should be 4, 92 for the 3rd element.', function(){ itemVerifier(3, 4, 92); });
         it('should be 2, 184 for the 4th element.', function(){ itemVerifier(4, 2, 184); });
         it('should be 1, 368 for the 5th element.', function(){ itemVerifier(5, 1, 368); });
     });
   });

   describe('.pick()', function(){
     var set = [
       new pair(1, 1),
       new pair(34, 2),
       new pair(35, 3),
       new pair(23, 4),
       new pair(2, 5)
     ];

     var res = peasant.pick(set);

     it('should pick only odd left items', function(){
        expect(res.length).to.equal(3);
        expect(res[0].right).to.equal(1);
        expect(res[1].right).to.equal(3);
        expect(res[2].right).to.equal(4);
     });
   });

   describe('.sum()', function(){
     var set = [
       new pair(1, 1),
       new pair(35, 3),
       new pair(23, 4),
     ];

     var res = peasant.sum(set);

     it('should correctly sum up', function(){
        expect(res).to.equal(8);
     });
   });
});
