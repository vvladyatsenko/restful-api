// routes/articleRoutes.js
const express = require('express');
const {
  getArticles,
  createArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} = require('../controllers/articleController');

const router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.get('/:articleId', getArticleById);
router.put('/:articleId', updateArticleById);
router.delete('/:articleId', deleteArticleById);

module.exports = router;
