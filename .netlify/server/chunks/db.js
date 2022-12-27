import sqlite3 from "sqlite3";
import md5 from "md5";
let db = new sqlite3.Database("src\\lib\\server\\database\\user.db");
const userbase = {
  login,
  register,
  changePassword
};
const logbase = {
  log
};
async function log(type, accept, message) {
  var today = new Date();
  var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "|" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let result = await sql`INSERT INTO log VALUES(${JSON.stringify({ type, accept, message })},${date})`;
  if (result.ok)
    return true;
  throw result.result;
}
function login(name) {
  return sql`SELECT * FROM user WHERE username = ${name}`;
}
async function changePassword(username, psw, newpsw) {
  let userR = (await sql`SELECT * FROM user WHERE username = ${username}`).result;
  if (userR.length <= 0)
    return { ok: false, message: "\u7528\u6237\u4E0D\u5B58\u5728", code: 3 };
  if (userR[0].password != psw)
    return { ok: false, message: "\u539F\u5BC6\u7801\u9519\u8BEF", code: 3 };
  await sql`UPDATE user SET password = ${newpsw} WHERE username = ${username}`;
  return { ok: true, message: "\u4FEE\u6539\u6210\u529F", code: 0 };
}
async function register({ username, password, nickname, value = {} }) {
  if ((await sql`SELECT * FROM user WHERE username = ${username}`).result.length > 0) {
    return { ok: false, message: "\u7528\u6237\u540D\u5DF2\u5B58\u5728", code: 1 };
  } else {
    let r = await sql`INSERT INTO user VALUES(${md5("[" + username + "]user" + (await sql`SELECT * FROM user`).length)},${username},${md5(password)},${nickname},${JSON.stringify(value)})`;
    if (r.ok)
      return { ok: true, message: "\u6210\u529F", code: 0 };
    return { ok: false, message: r.result, code: 2 };
  }
}
async function sql(cmd, ...params) {
  return new Promise((resolve, reject) => {
    if (typeof cmd != "object" || !cmd.length)
      throw new Error("use the tag function to call sql");
    db[cmd[0] && (cmd[0].includes("SELECT") || cmd[0].includes("select")) ? "all" : "run"](cmd.join("?"), params, (err, rows) => {
      resolve({ ok: err ? false : true, result: err ? err : rows });
    });
  });
}
export {
  logbase as l,
  userbase as u
};
