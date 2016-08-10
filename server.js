'use strict';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const getFace = require('cool-ascii-faces');
const bodyParser = require('body-parser');

const app = express();

let _correctAnswer;

app.set('port', process.env.PORT || 5000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.render('index', {
        question: getEquation(),
        template: ''
    });

    function getEquation() {
        let operators = ['+', '-'];
        let equation = randomNumberRange(0, 100) + operators[randomNumberRange(0, 2)] + randomNumberRange(0, 100);
        _correctAnswer = eval(equation);
        console.log('Сгенерированное выражение: ', equation, ', правильный ответ: ', _correctAnswer);
        return equation;
    }

    function randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
});
app.post('/answerQuestion', function(request, response) {
    let answer = request.body.answer;
    // const magicNumber = 2000;
    checkAnswer(request.body.answer);

    function checkAnswer(answer) {
        if (parseInt(answer) === _correctAnswer) renderFace();
        else renderError();
    }

    function renderFace() {
        console.time('render');
        response.render('index', {
            question: 'Все правильно!',
            template: getFace()
        });
        console.timeEnd('render');
    }

    function renderError() {
        console.log(answer);
        response.render('index', {
            question: '',
            template: 'Ответ неправльный!'
        });
    }
});

app.listen(app.get('port'), function() {
    console.log('Cool faces on port', app.get('port'));
});
