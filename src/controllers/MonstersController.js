// Declaração de Constantes
const Monsters = require('../models/Monsters');
const RepostaClass = require('./RespostaClass');

// Classe do Controller
class MonstersController {
    // Visualização de Monsters
    async read (req, resp) {
        Monsters.getTodos(function (erro, retorno) {
            let resposta = new RepostaClass();
            if (erro) {
                resposta.erro = true;
                resposta.msg = "Ocorreu um erro.";
                console.log('erro: ', erro);
            }
            else {
               resposta.dados = retorno;
            }
            resp.json(resposta);
        });
    }
}

// Exportação
module.exports = new MonstersController();