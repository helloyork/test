// @ts-nocheck
import { redirect } from "@sveltejs/kit"

export function GET({url}){
    let urle = new URL(url);
    if(urle.search && urle.searchParams.get('rl')){
        console.log(urle.searchParams.get('rl'));
        throw redirect(301,urle.searchParams.get('rl'))
    }else{
        throw redirect(307,'/');
    }
}
