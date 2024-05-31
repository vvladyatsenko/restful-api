# Express Server

## Встановлення

Клонувати репозиторій:

    git clone https://github.com/vvladyatsenko/restful-api.git

Встановити залежності:

    npm install
    або
    yarn install

## Запуск сервера

Для запуску сервера використовуйте наступну команду:

npm run dev
Сервер буде запущено на порту 3000.

Маршрути:

* Головний маршрут
GET / : Повертає "Get root route".

* Маршрути для користувачів
GET /users : Повертає "Get users route".
POST /users : Повертає "Post users route".
GET /users/:userId : Повертає "Get user by Id route: {userId}".
PUT /users/:userId : Повертає "Put user by Id route: {userId}".
DELETE /users/:userId : Повертає "Delete user by Id route: {userId}".

* Маршрути для статей
GET /articles : Повертає "Get articles route".
POST /articles : Повертає "Post articles route".
GET /articles/:articleId : Повертає "Get article by Id route: {articleId}".
PUT /articles/:articleId : Повертає "Put article by Id route: {articleId}".
DELETE /articles/:articleId : Повертає "Delete article by Id route: {articleId}".