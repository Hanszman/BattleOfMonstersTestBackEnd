// Declaração de Constantes
const RepostaClass = require('./RespostaClass');

// Classe do Controller
class BattleController {
    async create (req, resp) {
        console.log('POST');
    }
}

// Exportação
module.exports = new BattleController();