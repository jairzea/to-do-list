const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../controllers/authController');
const { body, validationResult } = require('express-validator');

// Validación de usuario y contraseña utilizando express-validator
const validate = [
  body('username').notEmpty().withMessage('El nombre de usuario es obligatorio.'),
  body('password').notEmpty().withMessage('La contraseña es obligatoria.'),
];

// Ruta para autenticar y obtener un token
router.post('/v1/login', validate, (req, res) => {
  // Obtener los resultados de la validación
  const errors = validationResult(req);

  // Verificar si hay errores de validación
  if (!errors.isEmpty()) {
    // Si hay errores, devolver una respuesta de error
    return res.status(400).json({ errors: errors.array() });
  }

  // Si no hay errores de validación, continuar con la autenticación
  authenticateUser(req, res); // Llama al controlador para la autenticación
});

module.exports = router;
