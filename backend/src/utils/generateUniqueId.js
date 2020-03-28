const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');  // ID criptografado em 4 bytes em Hexadecimal
}