import { dbtest } from '../../../../lib/server/database/db';
/** @type {import('./$types').RequestHandler} */
export async function POST({request}){
    // let message = await request.json();
    let message = JSON.stringify(await dbtest());
    // console.log(message);
    return new Response(JSON.stringify(message), { status: 200 })
}
