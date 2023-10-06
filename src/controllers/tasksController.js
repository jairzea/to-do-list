// controllers/tasksController.js
const { v4: uuidv4 } = require('uuid');

const getTasks = (req, res) => {
  const tasks = [
    { id: uuidv4(), content: 'Hacer mercado' },
    { id: uuidv4(), content: 'Ir al gimnasio' },
    { id: uuidv4(), content: 'Karate' },
    { id: uuidv4(), content: 'Tomar agua' },
    { id: uuidv4(), content: 'Dormir' },
    { id: uuidv4(), content: 'Lavar el coche' },
    { id: uuidv4(), content: 'Estudiar Node.js' },    
  ];

  res.json(tasks);
};

module.exports = {
  getTasks,
};
