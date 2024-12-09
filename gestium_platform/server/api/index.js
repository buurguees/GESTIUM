const express = require('express');
const userRoutes = require('./users/userRoutes');
const folderRoutes = require('./folders/folderRoutes');
const projectRoutes = require('./projects/projectRoutes');
const taskRoutes = require('./tasks/taskRoutes');
const roleRoutes = require('./roles/roleRoutes');

const router = express.Router();

// Registrar las rutas de las entidades
router.use('/users', userRoutes);
router.use('/folders', folderRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);
router.use('/roles', roleRoutes);


module.exports = router;
