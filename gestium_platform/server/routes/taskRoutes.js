const express = require('express');
const router = express.Router();

// Ruta para obtener todas las tareas
router.get('/', (req, res) => {
    res.send('Obtener todas las tareas');
});

// Ruta para crear una nueva tarea
router.post('/', (req, res) => {
    res.send('Crear una nueva tarea');
});

module.exports = router;
