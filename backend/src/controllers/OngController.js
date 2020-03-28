const crypto = require('crypto'); // será utilizado para criptografar o ID da ONG
const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection'); // conectando no BD

module.exports = {
    // Listando todas as ONGs
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    // Cadastrando/Criando uma nova ONG
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
}