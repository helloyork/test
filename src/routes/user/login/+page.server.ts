import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
  if (false) {//如果用户已经登录则转到个人主页
    //等储存做好就来
    throw redirect(307, '/user/me');
  }
}