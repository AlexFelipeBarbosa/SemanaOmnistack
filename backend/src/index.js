const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // utilizando a porta 3333

/**
 *  Rota / Recurso
 */

/**
 * Metodos HTTP: 
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /** 
    * Formas de conexão com o banco de dados.
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()  // Está forma é multi-banco
    */


