import { r as redirect } from "../../../../../chunks/index2.js";
import { u as userbase, l as logbase } from "../../../../../chunks/db.js";
import md5 from "md5";
async function POST({ request }) {
  let value = await request.json();
  if (!value.username || !value.password)
    return new Response(JSON.stringify(
      { pass: false, code: 1, message: "\u8BF7\u63D0\u4EA4\u6709\u6548\u4FE1\u606F", result: {} }
    ), { status: 401 });
  let user = await userbase.login(value.username);
  console.log(user);
  if (!user.ok)
    return new Response(JSON.stringify(
      { pass: false, code: 2, message: "\u8EAB\u4EFD\u9A8C\u8BC1\u5931\u8D25,\u8BF7\u5C3D\u5FEB\u8054\u7CFB\u7F51\u7AD9\u642D\u5EFA\u8005", result: {} }
    ), { status: 500 });
  if (user.result.length <= 0)
    return new Response(JSON.stringify(
      { pass: false, code: 3, message: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u8D26\u53F7", result: {} }
    ), { status: 401 });
  if (md5(value.password) != user.result[0].password)
    return new Response(JSON.stringify(
      { pass: false, code: 4, message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5BC6\u7801", result: {} }
    ), { status: 401 });
  if (value.log === void 0 || value.log)
    logbase.log("login", "true", `[${user.result[0].username}]Login successful`);
  return new Response(JSON.stringify({
    pass: true,
    code: 0,
    message: "\u9A8C\u8BC1\u6210\u529F",
    result: {
      userkey: user.result[0].userkey,
      username: user.result[0].username,
      password: value.password,
      nickname: user.result[0].nickname,
      value: JSON.stringify(user.result[0].value)
    }
  }), { status: 200 });
}
async function GET({ request }) {
  throw redirect(307, "/");
}
export {
  GET,
  POST
};
