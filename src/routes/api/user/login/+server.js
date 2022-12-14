import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({request}){
    let resulte = new Response({ content: json(arguments) }, { status: 200 });
    return resulte;
}
