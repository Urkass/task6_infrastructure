## Домашнее задание по инфраструктуре приложения.
[![Build Status](https://travis-ci.org/Urkass/task6_infrastructure.svg?branch=master)](https://travis-ci.org/Urkass/task6_infrastructure)
[![bitHound Overall Score](https://www.bithound.io/github/Urkass/task6_infrastructure/badges/score.svg)](https://www.bithound.io/github/Urkass/task6_infrastructure)
[![bitHound Dependencies](https://www.bithound.io/github/Urkass/task6_infrastructure/badges/dependencies.svg)](https://www.bithound.io/github/Urkass/task6_infrastructure/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/Urkass/task6_infrastructure/badges/devDependencies.svg)](https://www.bithound.io/github/Urkass/task6_infrastructure/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/Urkass/task6_infrastructure/badges/code.svg)](https://www.bithound.io/github/Urkass/task6_infrastructure)

Реализованы все основные и дополнительные пункты из [задания](https://gist.github.com/andre487/62b51b3e0089e35665849c63fc54acad).

[Приложение на хероку](https://enigmatic-river-85220.herokuapp.com/)

### О приложении

За основу было взято данное нам, как пример, приложение генерации ASCII-рожиц. К нему были добавлены функции генерации выражения и генерации случайного числа для того, чтобы добавить небольшую логику, на которую можно повесить тесты.
В итоге, оно выводит ASCII-рожицу при правильном ответе на простое случайногенерирующиееся выражение.

### Используемый стэк

* Хостинг: heroku
* Репозиторий: github
* CI: Travis
* Линтинг: eslint . Запуск `npm run lint`
* Облачный линтер http://uptimerobot.com/
* Тесты: Mocha + chai. Запуск `npm test`
* Мониторинг: bitHound

### Логи
`2016-08-10T14:39:04.690665+00:00 heroku[router]: at=info method=GET path="/" host=enigmatic-river-85220.herokuapp.com request_id=135ef8f6-e9b1-4015-a980-8cecfb4d153b fwd="46.73.237.247" dyno=web.1 connect=0ms service=2ms status=200 bytes=816
2016-08-10T14:39:04.905731+00:00 heroku[router]: at=info method=GET path="/styles.css" host=enigmatic-river-85220.herokuapp.com request_id=6f91ebbd-9f77-4a3c-92c0-93c8d4219ac3 fwd="46.73.237.247" dyno=web.1 connect=2ms service=2ms status=304 bytes=236
2016-08-10T14:39:10.014764+00:00 app[web.1]: Сгенерированное выражение:  25-25 , правильный ответ:  0
2016-08-10T14:39:10.020780+00:00 heroku[router]: at=info method=GET path="/" host=enigmatic-river-85220.herokuapp.com request_id=e688b360-6e51-416b-9b90-a7ea1150cad6 fwd="46.73.237.247" dyno=web.1 connect=0ms service=4ms status=200 bytes=816
2016-08-10T14:39:14.228325+00:00 heroku[router]: at=info method=GET path="/styles.css" host=enigmatic-river-85220.herokuapp.com request_id=943bb007-88df-4d6d-9271-7706dcd61883 fwd="46.73.237.247" dyno=web.1 connect=0ms service=2ms status=304 bytes=236
2016-08-10T14:42:17.818581+00:00 app[web.1]: Сгенерированное выражение:  13+24 , правильный ответ:  37
2016-08-10T14:42:17.833592+00:00 heroku[router]: at=info method=GET path="/" host=enigmatic-river-85220.herokuapp.com request_id=a84c0f83-f701-4688-8ffa-cc07cb1ed8d6 fwd="46.73.237.247" dyno=web.1 connect=0ms service=2ms status=200 bytes=816
2016-08-10T14:42:18.112523+00:00 heroku[router]: at=info method=GET path="/styles.css" host=enigmatic-river-85220.herokuapp.com request_id=098076b0-f4c4-443c-887a-23b0d8e45be5 fwd="46.73.237.247" dyno=web.1 connect=0ms service=1ms status=304 bytes=236
2016-08-10T14:42:21.723386+00:00 app[web.1]: 27
2016-08-10T14:42:21.738292+00:00 heroku[router]: at=info method=POST path="/answerQuestion" host=enigmatic-river-85220.herokuapp.com request_id=1030505a-a5d8-4c8f-a28c-9df35ba5fb51 fwd="46.73.237.247" dyno=web.1 connect=0ms service=2ms status=200 bytes=845
2016-08-10T14:42:21.999279+00:00 heroku[router]: at=info method=GET path="/styles.css" host=enigmatic-river-85220.herokuapp.com request_id=a3a59e3f-03bc-4a7a-983d-0e34cd8f0952 fwd="46.73.237.247" dyno=web.1 connect=0ms service=1ms status=304 bytes=236
2016-08-10T14:42:25.673585+00:00 heroku[router]: at=info method=GET path="/" host=enigmatic-river-85220.herokuapp.com request_id=3c337cbe-cfee-4639-80b8-0b6338094e73 fwd="46.73.237.247" dyno=web.1 connect=0ms service=3ms status=200 bytes=815
2016-08-10T14:42:25.658289+00:00 app[web.1]: Сгенерированное выражение:  2+31 , правильный ответ:  33
2016-08-10T14:42:25.958266+00:00 heroku[router]: at=info method=GET path="/styles.css" host=enigmatic-river-85220.herokuapp.com request_id=9554e2a9-6a45-4e90-9aaf-6afbf890564a fwd="46.73.237.247" dyno=web.1 connect=0ms service=2ms status=304 bytes=236
2016-08-10T14:42:28.371674+00:00 app[web.1]: 3
2016-08-10T14:42:28.386852+00:00 heroku[router]: at=info method=POST path="/answerQuestion" host=enigmatic-river-85220.herokuapp.com request_id=3b982f03-571f-4752-a453-024ad293b1da fwd="46.73.237.247" dyno=web.1 connect=0ms service=2ms status=200 bytes=845
2016-08-10T14:42:28.625386+00:00 heroku[router]: at=info method=GET path="/styles.css" host=enigmatic-river-85220.herokuapp.com request_id=bfde9662-2cd8-4919-b717-85d4154284a9 fwd="46.73.237.247" dyno=web.1 connect=0ms service=1ms status=304 bytes=236`
