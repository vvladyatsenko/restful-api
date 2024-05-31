# Express Server + Middleware

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

* Перевірка головного маршруту
Запит GET на головний маршрут:
Відкрийте Postman.
Створіть новий запит (кнопка "New").
Виберіть метод GET.
Введіть URL: http://localhost:3000/.
Натисніть кнопку Send.
Ви повинні отримати відповідь "Get root route".

"curl -X GET http://localhost:3000/"


* Перевірка маршрутів для користувачів
Запит GET на маршрут /users:
Створіть новий запит.
Виберіть метод GET.
Введіть URL: http://localhost:3000/users.
У розділі Headers додайте заголовок Authorization з вашим токеном (наприклад, your-auth-token).
Натисніть кнопку Send.
Ви повинні отримати відповідь "Get users route".

"curl -H "Authorization: your-auth-token" -X GET http://localhost:3000/users"


- Запит POST на маршрут /users:
Створіть новий запит.
Виберіть метод POST.
Введіть URL: http://localhost:3000/users.
У розділі Headers додайте заголовок Content-Type зі значенням application/json
У розділі Headers додайте заголовок Authorization з вашим токеном.
У розділі Body виберіть raw і JSON.
Введіть наступне тіло запиту:
{
  "username": "newuser",
  "password": "password123"
}
Натисніть кнопку Send.
Ви повинні отримати відповідь "Post users route".

"curl -H "Content-Type: application/json" -H "Authorization: your-auth-token" -X POST -d '{"username": "newuser", "password": "password123"}' http://localhost:3000/users"


- Запит GET на маршрут /users/
Створіть новий запит.
Виберіть метод GET.
Введіть URL: http://localhost:3000/users/1 (або інший існуючий ID користувача).
У розділі Headers додайте заголовок Authorization з вашим токеном.
Натисніть кнопку Send.
Ви повинні отримати відповідь "Get user by Id route: 1".

"curl -H "Authorization: your-auth-token" -X GET http://localhost:3000/users/1"


- Запит PUT на маршрут /users/
Створіть новий запит.
Виберіть метод PUT.
Введіть URL: http://localhost:3000/users/1.
У розділі Headers додайте заголовок Content-Type зі значенням application/json.
У розділі Headers додайте заголовок Authorization з вашим токеном.
У розділі Body виберіть raw і JSON.
Введіть наступне тіло запиту:
{
  "username": "updateduser",
  "password": "newpassword123"
}
Натисніть кнопку Send.
Ви повинні отримати відповідь "Put user by Id route: 1".

"curl -H "Content-Type: application/json" -H "Authorization: your-auth-token" -X PUT -d '{"username": "updateduser", "password": "newpassword123"}' http://localhost:3000/users/1"


- Запит DELETE на маршрут /users/
Створіть новий запит.
Виберіть метод DELETE.
Введіть URL: http://localhost:3000/users/1.
У розділі Headers додайте заголовок Authorization з вашим токеном.
Натисніть кнопку Send.
Ви повинні отримати відповідь "Delete user by Id route: 1".

* Перевірка маршрутів для статей
-Запит GET на маршрут /articles:
Створіть новий запит.
Виберіть метод GET.
Введіть URL: http://localhost:3000/articles.
У розділі Headers додайте заголовок Authorization з вашим токеном.
Натисніть кнопку Send.
Ви повинні отримати відповідь "Get articles route".

- Запит POST на маршрут /articles:
Створіть новий запит.
Виберіть метод POST.
Введіть URL: http://localhost:3000/articles.
У розділі Headers додайте заголовок Content-Type зі значенням application/json.
У розділі Headers додайте заголовок Authorization з вашим токеном.
У розділі Body виберіть raw і JSON.
Введіть наступне тіло запиту:
{
  "title": "New Article",
  "content": "This is a new article."
}
Натисніть кнопку Send.
Ви повинні отримати відповідь "Post articles route".

- Запит GET на маршрут /articles/
Створіть новий запит.
Виберіть метод GET.
Введіть URL: http://localhost:3000/articles/1 (або інший існуючий ID статті).
У розділі Headers додайте заголовок Authorization з вашим токеном.
Натисніть кнопку Send.
Ви повинні отримати відповідь "Get article by Id route: 1".

- Запит PUT на маршрут /articles/
Створіть новий запит.
Виберіть метод PUT.
Введіть URL: http://localhost:3000/articles/1.
У розділі Headers додайте заголовок Content-Type зі значенням application/json.
У розділі Headers додайте заголовок Authorization з вашим токеном.
У розділі Body виберіть raw і JSON.
Введіть наступне тіло запиту:
{
  "title": "Updated Article",
  "content": "This is an updated article."
}
Натисніть кнопку Send.
Ви повинні отримати відповідь "Put article by Id route: 1".

- Запит DELETE на маршрут /articles/
Створіть новий запит.
Виберіть метод DELETE.
Введіть URL: http://localhost:3000/articles/1.
У розділі Headers додайте заголовок Authorization з вашим токеном.
Натисніть кнопку Send.
Ви повинні отримати відповідь "Delete article by Id route: 1".

"curl -H "Authorization: your-auth-token" -X DELETE http://localhost:3000/users/1"