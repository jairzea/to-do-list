// controllers/tasksController.js
const { authenticateToken } = require('../middleware/authMiddleware');

const getTasks = (req, res) => {
  // Aquí no es necesario repetir la lógica de verificación del token,
  // ya que se hace en el middleware `authenticateToken`.

  // Aquí puedes continuar con la lógica para devolver la lista de tareas
  // Por ejemplo:
  const tasks = [
    { id: 1, title: 'Hacer la compra' },
    { id: 2, title: 'Lavar el coche' },
    { id: 3, title: 'Estudiar Node.js' },
  ];

  res.json(tasks);
};

module.exports = {
  getTasks,
};
