import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function POST({request}){
    let message = await request.json();
    return new Response(JSON.stringify(message), { status: 200 })
}
