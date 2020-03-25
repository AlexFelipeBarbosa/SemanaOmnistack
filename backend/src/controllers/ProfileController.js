const connection = require('../database/connection'); // conectando no BD

module.exports = {
// Listando os casos de uma determinada ONG
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}