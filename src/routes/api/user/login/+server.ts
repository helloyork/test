import { redirect } from '@sveltejs/kit';
import { login } from '../../../../lib/server/database/db';
import md5 from 'md5'
/**
 * 1: 身份验证失败
 * 2: 数据库错误
 * 3: 用户不存在
 * 4: 密码错误
 */
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    let value = await request.json();
    if (!value.username || !value.password) return new Response(JSON.stringify(
        { pass: false, code: 1, message: '请提交有效信息', result: {} }
    ), { status: 401 })
    let user = await login(value.username);
    if (!user.ok) return new Response(JSON.stringify(
        { pass: false, code: 2, message: '身份验证失败,请尽快联系网站搭建者', result: {} }
    ), { status: 500 })
    if (user.result.length <= 0) return new Response(JSON.stringify(
        { pass: false, code: 3, message: '请输入有效的Nomen账号', result: {} }
    ), { status: 401 })
    if (md5(value.password) != user.result[0].password) return new Response(JSON.stringify(
        { pass: false, code: 4, message: '请输入正确的密码', result: {} }
    ), { status: 401 })
    return new Response(JSON.stringify({
        pass: true, code: 0, message: '验证成功',
        result: { userkey: user.userkey, username: user.username, value: user.value }
    }), { status: 200 })
}

export async function GET({ request }) {
    throw redirect(307, '/');
}

