const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const authenticateToken = require('../middleware/authMiddleware');

// Ruta protegida para obtener la lista de tareas
router.get('/v1/tasks', authenticateToken, tasksController.getTasks);

module.exports = router;
