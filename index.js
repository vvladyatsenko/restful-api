const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

app.get('/', (req, res) => {
  res.send('Get root route');
});

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
