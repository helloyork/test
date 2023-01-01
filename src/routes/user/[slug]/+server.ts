/** @type {import('./$types').PageLoad} */
export function GET({ params }) {
    return new Response(JSON.stringify({content:params.slug}),{ status: 200 })
}