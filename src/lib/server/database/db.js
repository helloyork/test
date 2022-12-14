
// import sqlite3 from 'sqlite3';
// let db = new sqlite3.Database('./user.db');
export async function dbtest() {
    let result;
    let sql = `SELECT * FROM test`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            result.push(row);
        });
    });
    return result;
    // return 'hi!';
}

