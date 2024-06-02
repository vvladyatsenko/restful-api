const express = require('express');
const path = require('path');
const app = express();

const logRequests = require('./middlewares/logMiddleware');
const basicAuth = require('./middlewares/authMiddleware');
const validateUserInput = require('./middlewares/validationMiddleware');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

app.use(express.json());

app.use(logRequests);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views/pug'));

app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));

app.use('/users', basicAuth, validateUserInput);
app.use('/articles', basicAuth);

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  res.render('users', { users });
});

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = { id: userId, name: `User ${userId}` };
  res.render('user', { user });
});

app.use('/users', userRoutes);

app.get('/articles', (req, res) => {
  const articles = [
    { id: 1, title: 'First Article' },
    { id: 2, title: 'Second Article' },
  ];
  res.render('articles', { articles });
});

app.get('/articles/:articleId', (req, res) => {
  const articleId = req.params.articleId;
  const article = {
    id: articleId,
    title: `Article ${articleId}`,
    content: 'Content of the article.',
  };
  res.render('article', { article });
});

app.use('/articles', articleRoutes);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
