const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get articles route');
});

router.post('/', (req, res) => {
  res.send('Post articles route');
});

router.get('/:articleId', (req, res) => {
  res.send(`Get article by Id route: ${req.params.articleId}`);
});

router.put('/:articleId', (req, res) => {
  res.send(`Put article by Id route: ${req.params.articleId}`);
});

router.delete('/:articleId', (req, res) => {
  res.send(`Delete article by Id route: ${req.params.articleId}`);
});

module.exports = router;
