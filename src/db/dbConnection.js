// Declaração de Constantes
const mysql = require('mysql');

// Conexão com o banco de dados mysql
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_monsters_battle'
});

module.exports = conexao;