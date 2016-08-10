'use strict';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const getFace = require('cool-ascii-faces');
const bodyParser = require('body-parser');
const getEquation = require('./middleware/getEquation');
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
    let question = getEquation();
    response.render('index', {
        question: question.equation,
        template: ''
    });
    _correctAnswer = question.answer;
});
app.post('/answerQuestion', function(request, response) {
    let answer = request.body.answer;
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
