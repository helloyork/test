import { r as redirect } from "../../../../../chunks/index2.js";
import { u as userbase, l as logbase } from "../../../../../chunks/db.js";
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function usernameTest(name) {
  if (/^[a-zA-Z]{1}[A-Z|a-z|0-9]{5,20}/.test(name))
    return true;
  return false;
}
async function POST({ request }) {
  let value = await request.json();
  await sleep(3e3);
  if (value.username === void 0 || value.password === void 0 || value.nickname === void 0) {
    return new Response(JSON.stringify(
      { pass: false, code: 1, message: "\u4FE1\u606F\u7F3A\u5931", result: {} }
    ), { status: 401 });
  }
  if (!usernameTest(value.username)) {
    return new Response(JSON.stringify(
      { pass: false, code: 2, message: "\u7528\u6237\u540D\u4E0D\u5408\u89C4 (\u7528\u6237\u540D\u5E94\u4E3A5~20\u4E2A\u5B57\u6BCD\u3001\u6570\u5B57\u7684\u7EC4\u5408\u5E76\u4E14\u4EE5\u5B57\u6BCD\u5F00\u5934)", result: {} }
    ), { status: 401 });
  }
  if (value.nickname.length <= 1 || value.nickname.length >= 20) {
    return new Response(JSON.stringify(
      { pass: false, code: 3, message: "\u6635\u79F0\u8FC7\u957F\u6216\u8FC7\u77ED", result: {} }
    ), { status: 401 });
  }
  if (value.password.length <= 8 || value.password.length >= 64) {
    return new Response(JSON.stringify(
      { pass: false, code: 4, message: "\u5BC6\u7801\u957F\u5EA6\u5E94\u5927\u4E8E8\u5E76\u4E14\u5C0F\u4E8E64", result: {} }
    ), { status: 401 });
  }
  let result = await userbase.register(value);
  if (result.ok) {
    if (value.log === void 0 || value.log)
      logbase.log("register", "true", `[${value.username}]Register successful`);
    return new Response(JSON.stringify(
      { pass: true, code: 0, message: "\u6CE8\u518C\u6210\u529F", result: { userkey: value.userkey, username: value.username, nickname: value.nickname, password: value.password, value: JSON.stringify({}) } }
    ), { status: 200 });
  } else {
    return new Response(JSON.stringify(
      { pass: false, code: 5, message: result.message, result: {} }
    ), { status: 401 });
  }
}
async function GET({ request }) {
  throw redirect(307, "/");
}
export {
  GET,
  POST
};
