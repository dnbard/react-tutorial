const expect = require('chai').expect;

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(5)).to.be.equal(-1);
            expect([1, 2, 3].indexOf(0)).to.be.equal(-1);
        });
    });

    describe('#push', function(){
        it('should add element', function(){
            var myArr = [];
            myArr.push(1);

            expect(myArr.length).to.be.equal(1);
        });
    });
});
