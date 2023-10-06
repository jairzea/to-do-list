const express = require('express');
const cors = require('cors');
const app = express();
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');
const authenticateToken = require('./middleware/authMiddleware');
require('dotenv').config();

// Configuración del middleware de CORS
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

// Configuración de middleware
app.use(express.json());

// Ruta de autenticación
app.use('/api', authRouter);

// Middleware de autenticación global para rutas protegidas
app.use(authenticateToken);

// Rutas protegidas
app.use('/api', tasksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
