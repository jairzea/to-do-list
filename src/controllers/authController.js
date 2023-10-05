// controllers/authController.js
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Función para autenticar al usuario
function authenticateUser(req, res) {

    const secretKey = process.env.JWT_SECRET_KEY;

    const { username, password } = req.body;

    // Obtiene las credenciales almacenadas en las variables de entorno
    const storedUsername = process.env.USER_NAME;
    const storedPassword = process.env.PASSWORD;

    // Verifica las credenciales proporcionadas en la solicitud con las almacenadas en las variables de entorno
    if (username === storedUsername && password === storedPassword) {
        // Genera un token JWT
        const token = jwt.sign({ sub: username }, secretKey, { expiresIn: '1h' });

        console.log("token", jwt.decode(token) );

        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas.' });
    }
}

module.exports = {
  authenticateUser,
};
