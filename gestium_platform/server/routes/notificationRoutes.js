const express = require('express');
const router = express.Router();

// Ruta para obtener todas las notificaciones
router.get('/', (req, res) => {
    res.send('Obtener todas las notificaciones');
});

// Ruta para crear una nueva notificación
router.post('/', (req, res) => {
    res.send('Crear una nueva notificación');
});

module.exports = router;
