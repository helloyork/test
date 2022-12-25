export function GET(){
    return new Response(JSON.stringify(
        {  message: 'hi', result: {} }
    ), { status: 200 })
}