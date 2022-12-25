
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('src\\lib\\server\\database\\user.db');
/*
user (
    userkey TEXT PRIMARY Key NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT,
    value TEXT
); 
*/

export async function login(name) {
    return sql`SELECT * FROM user WHERE username = ${name}`;
}

async function sql(cmd, ...params) {
    return new Promise((resolve, reject) => {
        if (typeof cmd != 'object' || !cmd.length) throw new Error('use the tag function to call sql');
        db[(cmd[0] && (cmd[0].includes('SELECT') || cmd[0].includes('select'))) ? 'all' : 'run']
            (cmd.join('?'), params, (err, rows) => {
                resolve({ ok: err ? false : true, result: err ? err : rows });
            })
    })
}



