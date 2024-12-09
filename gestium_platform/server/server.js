const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const folderRoutes = require('./routes/folderRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const roleRoutes = require('./routes/roleRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const calendarRoutes = require('./routes/calendarRoutes');
const errorHandler = require('./errorHandler');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const apiRoutes = require('./api');



// Usar rutas
app.use('/api/users', userRoutes);
app.use('/api/folders', folderRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/calendars', calendarRoutes);
app.use(cors()); // Permite solicitudes desde otros dominios
app.use(helmet()); // Mejora la seguridad
app.use(morgan('dev')); // Registra solicitudes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Al final de las rutas
app.use(errorHandler);

// Servidor en ejecución
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

// Rutas de la API
app.use('/api', apiRoutes);
