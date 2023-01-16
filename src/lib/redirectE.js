// @ts-nocheck
import { redirect } from "@sveltejs/kit";

export function go(url) {
    throw redirect(301,`/redirect?rl=${url}`);
}
