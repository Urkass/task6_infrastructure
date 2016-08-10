const getRandomNumber = require('./getRandomNumber');

module.exports = function() {
    var question = {
        equation: 1,
        answer: 1
    };
    var operators = ['+', '-'];
    question.equation = getRandomNumber(0, 100) + operators[getRandomNumber(0, 2)] + getRandomNumber(0, 100);
    question.answer = eval(question.equation);
    console.log('Сгенерированное выражение: ', question.equation, ', правильный ответ: ', question.answer);
    return question;
};
