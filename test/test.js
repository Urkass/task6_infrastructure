const assert = require('chai').assert;

const getEquation = require('../middleware/getEquation');
const getRandomNumber = require('../middleware/getRandomNumber');

describe('getEquation()', function() {
    it('Должен возвращать объект с выражением строкой и ответом цифрой', function() {
        var answ = getEquation();
        assert.typeOf(answ.equation, 'string');
        assert.typeOf(answ.answer, 'Number');
    });
});
describe('getRandomNumber()', function() {
    for (var i = 1; i < 5; i++) {
        test();
    }

    function test() {
        var x1 = Math.floor(Math.random()*100);
        var x2 = x1 + Math.floor(Math.random()*100);
        it(`Вернул число между ${x1} и ${x2}`, function() {
            var number = getRandomNumber(x1, x2);
            assert.isAtLeast(number, x1);
            assert.isAtMost(number, x2);
        });
    }
});
