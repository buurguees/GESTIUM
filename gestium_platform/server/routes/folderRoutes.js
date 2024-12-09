const express = require('express');
const router = express.Router();

// Ruta para obtener todas las carpetas
router.get('/', (req, res) => {
    res.send('Obtener todas las carpetas');
});

// Ruta para crear una nueva carpeta
router.post('/', (req, res) => {
    res.send('Crear una nueva carpeta');
});

module.exports = router;
