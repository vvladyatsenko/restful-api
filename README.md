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

Кореневий маршрут:
`GET /` Повертає сторінку з оглавленням та навігацією.

Маршрути користувачів:
`GET /users` Повертає список всіх користувачів.
`POST /users` Створює нового користувача.
`GET /users/userId` Повертає інформацію про користувача з вказаним ідентифікатором.
`PUT /users/userId` Оновлює інформацію про користувача з вказаним ідентифікатором.
`DELETE /users/userId` Видаляє користувача з вказаним ідентифікатором.

Маршрути статей:
`GET /articles` Повертає список всіх статей.
`POST /articles` Створює нову статтю.
`GET /articles/articleId` Повертає інформацію про статтю з вказаним ідентифікатором.
`PUT /articles/articleId` Оновлює інформацію про статтю з вказаним ідентифікатором.
`DELETE /articles/articleId` Видаляє статтю з вказаним ідентифікатором.

*Додані шаблонізатори*

-Для користувачів: PUG
-Для статей: EJS

## Тестування за допомогою Postman

-Запустіть сервер командою npm start або yarn start.
-Відкрийте Postman та створіть новий запит.
-Вкажіть метод запиту, URL та, за необхідності, параметри запиту.
-Відправте запит на сервер та перегляньте відповідь.
-Використання curl для перевірки

`-GET-запит для отримання списку користувачів`
curl -X GET http://localhost:3000/users -H "Authorization: Bearer your-token"


`POST-запит для створення користувача`
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/" \
-H "Authorization: Bearer your-token" \
-d '{"username": "newuser", "email": "newuser@example.com"}'


`GET-запит для отримання користувача за ID`
curl -X GET http://localhost:3000/users/1 -H "Authorization: Bearer your-token"


`PUT-запит для оновлення користувача`
curl -X PUT http://localhost:3000/users/1 \
-H "Content-Type: application/" \
-H "Authorization: Bearer your-token" \
-d '{"username": "updateduser", "email": "updateduser@example.com"}'


`DELETE-запит для видалення користувача`
curl -X DELETE http://localhost:3000/users/1 -H "Authorization: Bearer your-token"


*Мідлвари*

`logger` - логгує всі HTTP-запити та відповіді.
Відкрийте термінал, запустіть сервер та відправте будь-який запит через Postman. В терміналі ви побачите логи запитів та відповідей.
`errorHandler`
Обробляє всі помилки, які були передані через next(error). Логгує стек помилки та повертає клієнту відповідь з відповідним статусом та повідомленням.
`checkArticlesEmpty` та `checkUsersEmpty`
Перевіряє, чи порожній масив об'єктів: articles (checkArticlesEmpty) або users (checkUsersEmpty). Якщо масив порожній, він відправляє клієнту відповідь з повідомленням "No users found" / "No articles found" зі статусом 200.
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