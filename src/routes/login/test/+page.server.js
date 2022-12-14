// import { dbtest } from '$lib/database/db';

// /** @type {import('./$types').PageLoad} */
// export function GET({ params }) {
//     return JSON.stringify(params);
// }
/** @type {import('./$types').PageLoad} */
export async function load() {
    return 'hi';
    // try{
    //     return await dbtest();
    // }catch(err){
    //     return err;
    // }
}