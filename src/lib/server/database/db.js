
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('src\\lib\\server\\database\\user.db');
export async function dbtest() {
    let result = await gDbtest();
    console.log(result);
    return result;
}
function gDbtest() {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM test2`;
        db.all(sql, [], (err, row) => {
            if (err) throw new Error(err);
            resolve(row);
        });
    })
}
