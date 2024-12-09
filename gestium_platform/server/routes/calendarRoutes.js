const express = require('express');
const router = express.Router();

// Ruta para obtener los calendarios
router.get('/', (req, res) => {
    res.send('Obtener calendarios');
});

// Ruta para agregar un evento al calendario
router.post('/', (req, res) => {
    res.send('Agregar evento al calendario');
});

module.exports = router;
