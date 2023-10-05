const crypto = require('crypto');

// Longitud recomendada para una clave segura (debe ser suficientemente larga)
const keyLength = 64;

// Generar una clave secreta aleatoria
const secretKey = crypto.randomBytes(keyLength).toString('hex');

console.log('Secret Key:', secretKey);
