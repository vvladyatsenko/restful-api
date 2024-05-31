const express = require('express');
const logRequests = require('./middlewares/logMiddleware');
const basicAuth = require('./middlewares/authMiddleware');
const validateUserInput = require('./middlewares/validationMiddleware');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
app.use(express.json());

app.use(logRequests);

app.use('/users', basicAuth, validateUserInput, userRoutes);

app.use('/articles', basicAuth, articleRoutes);

app.get('/', (req, res) => {
  res.send('Get root route');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
