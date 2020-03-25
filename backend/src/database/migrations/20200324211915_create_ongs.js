
exports.up = function (knex) {
    // Criando a tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function (knex) {
    // Caso necessite desfazer se der algum problema
    return knex.schema.dropTable('ongs');
};
