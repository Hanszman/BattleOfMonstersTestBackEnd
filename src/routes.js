// Declaração de Constantes
const express = require('express');
const routes = express.Router();
const MonstersController = require('./controllers/MonstersController');
const BattleController = require('./controllers/BattleController');

// Rotas
routes.get('/', (req, res) => { // Rota de Teste
    return res.send('Hello World!');
});
routes.get('/monsters', MonstersController.readAll); // Rota de readAll do Monsters
routes.post('/battle', BattleController.create); // Rota de create do Battle

// Exportação
module.exports = routes;