const express = require('express');
const router = express.Router();

// Ruta para obtener todos los roles
router.get('/', (req, res) => {
    res.send('Obtener todos los roles');
});

// Ruta para asignar un rol
router.post('/', (req, res) => {
    res.send('Asignar un rol');
});

module.exports = router;
