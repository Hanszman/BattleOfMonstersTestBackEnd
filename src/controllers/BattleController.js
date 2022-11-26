// Declaração de Constantes
const RepostaClass = require('./RespostaClass');

// Classe do Controller
class BattleController {
    async create (req, resp) {
        const body = req.body;
        let resposta = new RepostaClass();
        let random = Math.floor(Math.random()*2);
        if (random === 0)
            resposta.dados = body.monster1Id;
        else
            resposta.dados = body.monster2Id;
        resp.json(resposta);
    }
}

// Exportação
module.exports = new BattleController();