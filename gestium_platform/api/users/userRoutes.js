const express = require('express');
const { registerUser, loginUser, getAllUsers } = require('./userController');

const router = express.Router();

// Rutas para gestión de usuarios
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

module.exports = router;
