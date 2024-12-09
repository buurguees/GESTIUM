const Joi = require('joi');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'mi_clave_secreta';
const { getAllUsers, registerUser } = require('../controllers/userController');


router.get('/', getAllUsers);
router.post('/', registerUser);


const userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('admin', 'execution', 'technic').required()
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verificar credenciales (esto es un ejemplo básico)
    if (username === 'admin' && password === '1234') {
        const token = jwt.sign({ username, role: 'admin' }, secretKey, { expiresIn: '1h' });
        return res.send({ token });
    }

    res.status(401).send('Credenciales incorrectas');
});

router.post('/', (req, res) => {
    const { error, value } = userSchema.validate(req.body);
    if (error) return res.status(400).send(`Error en los datos: ${error.message}`);

    // Procesar y guardar usuario
    res.send('Usuario registrado correctamente');
});

module.exports = router;
