const connection = require('../database/connection');

module.exports = {
    // Listando todos os incidents
    async index(request, response) {
        const { page = 1 } = request.query; // paginação

        const [count] = await connection('incidents').count(); // contar o numero de casos (incidents)

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);

        // Informando no Header da resposta (response) o total de casos (incidents)
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    // Criando/gravando um novo Caso (incident)
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    // Apagar/Deletar um caso (incident)
    async delete(request, response) {
        const { id } = request.params; // pegando o ID informado 
        const ong_id = request.headers.authorization;  // pegando o ID da ONG informado no header

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first(); // Neste exemplo vai trazer somente um ID, mas esse comando força trazer o primeiro.

        // Agora ira verificar se o ID do incidente (caso) pertence a ONG correta

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};