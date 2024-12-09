const express = require('express');
const router = express.Router();

// Ruta para obtener todos los proyectos
router.get('/', (req, res) => {
    res.send('Obtener todos los proyectos');
});

// Ruta para crear un nuevo proyecto
router.post('/', (req, res) => {
    res.send('Crear un nuevo proyecto');
});

module.exports = router;
