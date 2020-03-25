const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Criando a rota de Login
routes.post('/sessions', SessionController.create);

// Listando todas as ONGS
routes.get('/ongs' , OngController.index);
// Gravando/Incluindo/Cadastrando uma nova ONG
routes.post('/ongs', OngController.create);


// Listando todos os Incidents (casos)
routes.get('/incidents', IncidentController.index);
// Gravando/Incluindo/Cadastrando uma novo CASO (incident)
routes.post('/incidents', IncidentController.create);
// Deletar/Apagar um incidente (caso)
routes.delete('/incidents/:id', IncidentController.delete);

// Listando os casos (incidents) de uma determinada ONG
routes.get('/profile', ProfileController.index);



module.exports = routes;