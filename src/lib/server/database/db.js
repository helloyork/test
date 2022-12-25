
import sqlite3 from 'sqlite3';
import md5 from 'md5';
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
/**
 * 1:重名
 */
//CREATE TABLE user (userkey TEXT PRIMARY Key,username TEXT NOT NULL, password TEXT NOT NULL, nickname TEXT,value TEXT);
export async function register({username,password,nickname,value={}}) {
    if ((await sql`SELECT * FROM user WHERE username = ${username}`).length>0) {
        console.log('wth?')
        return { ok: false, message: '用户名已存在', code: 1 }
    }
    let r=await sql`INSERT INTO user VALUES(${md5('['+username+']user'+((await sql`SELECT * FROM user`).length))},${username},${md5(password)},${nickname},${JSON.stringify(value)})`;
    if(r.ok)return { ok: true, message: '成功', code: 0 };
    throw new Error(r.result)
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



