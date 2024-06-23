# Express Server

Сервер надає маршрути для роботи з користувачами та статтями, дозволяючи виконувати операції читання, створення, оновлення та видалення даних. В сервер інтегровані шаблонізатори PUG та EJS.

## Встановлення

Клонувати репозиторій:

    git clone https://github.com/vvladyatsenko/restful-api/tree/pug

Встановити залежності:

    npm install
    або
    yarn install

## Запуск сервера

Для запуску сервера використовуйте наступну команду:
npm start
Сервер буде запущено на порту 3000.

## Маршрути

Кореневий маршрут:<br>
`GET /` Повертає сторінку з оглавленням та навігацією.<br>

Маршрути користувачів:<br>
`GET /users` Повертає список всіх користувачів.<br>
`POST /users` Створює нового користувача.<br>
`GET /users/userId` Повертає інформацію про користувача з вказаним ідентифікатором.<br>
`PUT /users/userId` Оновлює інформацію про користувача з вказаним ідентифікатором.<br>
`DELETE /users/userId` Видаляє користувача з вказаним ідентифікатором.<br>

Маршрути статей:<br>
`GET /articles` Повертає список всіх статей.<br>
`POST /articles` Створює нову статтю.<br>
`GET /articles/articleId` Повертає інформацію про статтю з вказаним ідентифікатором.<br>
`PUT /articles/articleId` Оновлює інформацію про статтю з вказаним ідентифікатором.<br>
`DELETE /articles/articleId` Видаляє статтю з вказаним ідентифікатором.<br>

*Додані шаблонізатори*

-Для користувачів: PUG
-Для статей: EJS

## Тестування за допомогою Postman

-Запустіть сервер командою npm start або yarn start.<br>
-Відкрийте Postman та створіть новий запит.<br>
-Вкажіть метод запиту, URL та, за необхідності, параметри запиту.<br>
-Відправте запит на сервер та перегляньте відповідь.<br>
-Використання curl для перевірки<br>

`GET-запит для отримання списку користувачів`<br>
curl -X GET http://localhost:3000/users -H "Authorization: Bearer your-token"


`POST-запит для створення користувача`<br>
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/" \
-H "Authorization: Bearer your-token" \
-d '{"username": "newuser", "email": "newuser@example.com"}'


`GET-запит для отримання користувача за ID`<br>
curl -X GET http://localhost:3000/users/1 -H "Authorization: Bearer your-token"


`PUT-запит для оновлення користувача`<br>
curl -X PUT http://localhost:3000/users/1 \
-H "Content-Type: application/" \
-H "Authorization: Bearer your-token" \
-d '{"username": "updateduser", "email": "updateduser@example.com"}'


`DELETE-запит для видалення користувача`<br>
curl -X DELETE http://localhost:3000/users/1 -H "Authorization: Bearer your-token"


*Мідлвари*

`logger` - логгує всі HTTP-запити та відповіді.
Відкрийте термінал, запустіть сервер та відправте будь-який запит через Postman. В терміналі ви побачите логи запитів та відповідей.<br>
`errorHandler`
Обробляє всі помилки, які були передані через next(error). Логгує стек помилки та повертає клієнту відповідь з відповідним статусом та повідомленням.<br>
`checkArticlesEmpty` та `checkUsersEmpty`
Перевіряє, чи порожній масив об'єктів: articles (checkArticlesEmpty) або users (checkUsersEmpty). Якщо масив порожній, він відправляє клієнту відповідь з повідомленням "No users found" / "No articles found" зі статусом 200.<br>
`validateUserData` (для /users)
Перевіряє дані запиту, щоб переконатися, що в тілі запиту присутні поля "username" та "email", а також введені дані відповідають своїм типам (string, email).

Приклад:

{
  "username": "newuser",
  "email": "newuser@example.com"
}

Якщо одне або обидва ці поля відсутні, або введено неправильний тип даних, мідлвар відправляє відповідь з помилкою та статусом 400.

validateArticleData (для /articles)
Перевіряє дані запиту, щоб переконатися, що в тілі запиту присутні поля "title" та "content".

Приклад:

{
  "title": "New Article",
  "content": "Content of the new article."
}

Якщо одне або обидва ці поля відсутні, мідлвар відправляє відповідь з помилкою та статусом 400.