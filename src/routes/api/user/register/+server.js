import { redirect } from "@sveltejs/kit";
import { userbase, logbase } from "../../../../lib/server/database/db.js";

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

function usernameTest(name) {
    if (/^[a-zA-Z]{1}[A-Z|a-z|0-9]{5,20}/.test(name)) return true;
    return false;
}
/**
 * 1:信息缺失
 * 2:用户名不合规
 * 3:昵称不合规
 * 4:密码长度不合规
 * 5:数据库问题
 */
/** 
 * @type {import('./$types').RequestHandler}
 */
export async function POST({ request }) {
    let value = await request.json();
    await sleep(3000);
    if (value.username === undefined || value.password === undefined || value.nickname === undefined) {
        return new Response(JSON.stringify(
            { pass: false, code: 1, message: '信息缺失', result: {} }
        ), { status: 401 })
    }
    if (!usernameTest(value.username)) {
        return new Response(JSON.stringify(
            { pass: false, code: 2, message: '用户名不合规 (用户名应为5~20个字母、数字的组合并且以字母开头)', result: {} }
        ), { status: 401 })
    }
    if (value.nickname.length <= 1 || value.nickname.length >= 20) {
        return new Response(JSON.stringify(
            { pass: false, code: 3, message: '昵称过长或过短', result: {} }
        ), { status: 401 })
    }
    if (value.password.length <= 8 || value.password.length >= 64) {
        return new Response(JSON.stringify(
            { pass: false, code: 4, message: '密码长度应大于8并且小于64', result: {} }
        ), { status: 401 })
    }
    let result = await userbase.register(value);
    if (result.ok) {
        if (value.log===undefined||value.log) logbase.log('register', 'true', `[${value.username}]Register successful`);
        return new Response(JSON.stringify(
            { pass: true, code: 0, message: '注册成功', result: { userkey: value.userkey, username: value.username, nickname: value.nickname, password: value.password, value: JSON.stringify({}) } }
        ), { status: 200 })
    } else {
        return new Response(JSON.stringify(
            { pass: false, code: 5, message: result.message, result: {} }
        ), { status: 401 })
    }
}

export async function GET({ request }) {
    throw redirect(307, '/');
}


