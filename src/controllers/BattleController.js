// Declaração de Constantes
const RepostaClass = require('./RespostaClass');

// Classe do Controller
class BattleController {
    async create (req, resp) {
        const body = req.body
        console.log(body);
    }
}

// Exportação
module.exports = new BattleController();