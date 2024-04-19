const sqlite3 = require('sqlite3').verbose();

class Database {
    constructor(dbPath) {
        this.db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
            if (err) {
                console.error('Could not connect to database', err);
            } else {
                console.log('Connected to database');
            }
        });
    }

    close() {
        this.db.close((err) => {
            if (err) {
                console.error('Error closing database', err);
            } else {
                console.log('Database connection closed');
            }
        });
    }

    query(sql, params, callback) {
        this.db.all(sql, params, (err, rows) => {
            if (err) {
                console.error('Error running query', sql, err);
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }
}

module.exports = Database;
