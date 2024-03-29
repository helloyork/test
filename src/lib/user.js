
import { writable } from "svelte/store";
import { browser } from '$app/environment'

export let user = writable((browser && localStorage.getItem('user')) ? localStorage.getItem('user') : {});
if (browser) {
    user.subscribe(u => localStorage.setItem('user',u))
}

export async function locallogin(ls) {
    let value = JSON.parse(ls.user);
    if (value.username === undefined) {
        console.log(value);
        return false;
    } else if (value.username !== undefined && value.password !== undefined) {
        return (await login(value.username, value.password, false));
    }
}

export function login(username, password, log) {
    return new Promise((resolve,reject) => {
        fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password, log })
        })
            .then((result) => result.json())
            .then(resolve);
    })
}

export function register(username, nickname,password){
    return new Promise((resolve,reject) => {
        fetch('/api/user/register', {
            method: 'POST',
            body: JSON.stringify({ username, nickname,password })
        })
            .then((result) => result.json())
            .then(resolve);
    })
}

export function logout() {
    return;
}
