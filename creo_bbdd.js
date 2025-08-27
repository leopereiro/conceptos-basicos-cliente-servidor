//const sqlite3 = require("sqlite3").verbose();
const sqlite3 = require("sqlite3").verbose();
function creoBBDD() {
    const db = new sqlite3.Database(
        "usuarios.db",
        sqlite3.OPEN_READWRITE,
        (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("conectado ...");
        },
    );
    db.exec(
        `CREATE TABLE if not exists USUARIOS (
            ID_USUARIO		INTEGER PRIMARY KEY AUTOINCREMENT,
            NOME_USUARIO	TEXT NOT NULL,
            MAIL_USUARIO	TEXT UNIQUE NOT NULL,
            ROL_USUARIO		TEXT DEFAULT 'usuario'
        );

        CREATE TABLE IF NOT EXISTS TAREFAS (
            ID_TAREFA    INTEGER PRIMARY KEY AUTOINCREMENT,
            TITULO       TEXT NOT NULL,
            DESCRICION   TEXT,
            ID_USUARIO   INTEGER NOT NULL,
            FOREIGN KEY (ID_USUARIO) REFERENCES USUARIOS(ID_USUARIO)
    );`,
    (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("creada ...");
        },
    );
    return db;
}

module.exports = creoBBDD();
