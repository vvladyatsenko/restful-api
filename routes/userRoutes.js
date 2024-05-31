const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get users route');
});

router.post('/', (req, res) => {
  res.send('Post users route');
});

router.get('/:userId', (req, res) => {
  res.send(`Get user by Id route: ${req.params.userId}`);
});

router.put('/:userId', (req, res) => {
  res.send(`Put user by Id route: ${req.params.userId}`);
});

router.delete('/:userId', (req, res) => {
  res.send(`Delete user by Id route: ${req.params.userId}`);
});

module.exports = router;
