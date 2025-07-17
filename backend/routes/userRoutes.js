// routes/userRoutes.js

const express = require('express');
const { getUserProfile } = require('../controllers/user/userController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authenticate, getUserProfile);

module.exports = router;
