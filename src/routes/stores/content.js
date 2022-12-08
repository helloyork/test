import { writable } from 'svelte/store';
import { browser } from "$app/env";

var stored = localStorage.getItem('content');
content='awa';
if (browser){
    content.subscribe((value) => (localStorage.setItem('content',value)));
}
export const content = writable(stored || 'awa');



