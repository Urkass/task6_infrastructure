'use strict';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const getFace = require('cool-ascii-faces');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 5000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.render('index', { template: '' });
});

app.get('/answerQuestion', function(request, response) {
    console.time('render');
    response.render('index', { template: getFace() });
    console.timeEnd('render');
});

app.listen(app.get('port'), function() {
    console.log('Cool faces on port', app.get('port'));
});
