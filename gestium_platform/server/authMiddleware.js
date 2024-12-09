const jwt = require('jsonwebtoken');
const secretKey = 'mi_clave_secreta';

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Acceso denegado');

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Token inválido');
    }
};
