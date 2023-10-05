const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');
const authenticateToken = require('./middleware/authMiddleware');
require('dotenv').config();

// Configuración de middleware
app.use(express.json());

// Ruta de autenticación
app.use('/api', authRouter);

// Middleware de autenticación global para rutas protegidas
app.use(authenticateToken);

// Rutas protegidas
app.use('/api', tasksRouter);

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
