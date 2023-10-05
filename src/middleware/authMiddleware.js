// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token de autenticación no válido.' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = authenticateToken;
