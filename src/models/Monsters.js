// Declaração de Constantes
const db = require('../db/dbConnection');

// Classe de Monsters
module.exports = class MonstersModel {
    static getTodos(callback) {
        return db.query("SELECT * FROM monsters", callback);
    }

    static getId(id, callback) {
        return db.query("SELECT * FROM monsters WHERE id = ?",
        [id],
        callback);
    }
};