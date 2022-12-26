/**
 * @todo ban
 * @todo 日志
 */

import { redirect } from '@sveltejs/kit';
import { userbase, logbase } from '../../../../lib/server/database/db';
import md5 from 'md5';

/** 
 * @type {import('./$types').RequestHandler}
 */
export async function POST({ request }) {
    let value = await request.json();
    if (!value.username || !value.password) return new Response(JSON.stringify(
        { pass: false, code: 1, message: '请提交有效信息', result: {} }
    ), { status: 401 })
    let user = await userbase.login(value.username);
    console.log(user);
    if (!user.ok) return new Response(JSON.stringify(
        { pass: false, code: 2, message: '身份验证失败,请尽快联系网站搭建者', result: {} }
    ), { status: 500 })
    if (user.result.length <= 0) return new Response(JSON.stringify(
        { pass: false, code: 3, message: '请输入有效的账号', result: {} }
    ), { status: 401 })
    if (md5(value.password) != user.result[0].password) return new Response(JSON.stringify(
        { pass: false, code: 4, message: '请输入正确的密码', result: {} }
    ), { status: 401 })
    if (value.log===undefined||value.log) logbase.log('login', 'true', `[${user.result[0].username}]Login successful`);
    return new Response(JSON.stringify({
        pass: true, code: 0, message: '验证成功',
        result: {
            userkey: user.result[0].userkey,
            username: user.result[0].username,
            password: value.password,
            nickname: user.result[0].nickname,
            value: JSON.stringify(user.result[0].value)
        }
    }), { status: 200 })
}

export async function GET({ request }) {
    throw redirect(307, '/');
}

