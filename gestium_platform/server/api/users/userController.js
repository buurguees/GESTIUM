const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../../private/users.json');

// Registrar un nuevo usuario
const registerUser = (req, res) => {
    const { username, email, password, role } = req.body;

    fs.readFile(usersPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error al leer la base de datos de usuarios.');

        const users = JSON.parse(data || '[]');
        const newUser = { id: Date.now(), username, email, password, role };

        users.push(newUser);

        fs.writeFile(usersPath, JSON.stringify(users, null, 2), (err) => {
            if (err) return res.status(500).send('Error al guardar el nuevo usuario.');
            res.status(201).send('Usuario registrado exitosamente.');
        });
    });
};

// Iniciar sesión
const loginUser = (req, res) => {
    const { email, password } = req.body;

    fs.readFile(usersPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error al leer la base de datos de usuarios.');

        const users = JSON.parse(data || '[]');
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            res.status(200).send({ message: 'Inicio de sesión exitoso.', user });
        } else {
            res.status(401).send('Credenciales inválidas.');
        }
    });
};

// Obtener todos los usuarios
const getAllUsers = (req, res) => {
    fs.readFile(usersPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error al leer la base de datos de usuarios.');
        res.status(200).send(JSON.parse(data || '[]'));
    });
};

module.exports = { registerUser, loginUser, getAllUsers };
