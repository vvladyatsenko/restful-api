// routes/userRoutes.js
const express = require('express');
const {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:userId', getUserById);
router.put('/:userId', updateUserById);
router.delete('/:userId', deleteUserById);

module.exports = router;
