<script>
	import { writable } from 'svelte/store';
	import Tip from './tip.svelte';
	import { locallogin, login, user } from '$lib/user.js';
	import { setContext } from 'svelte';
	let username,
		password = '';
	$: dis = false;
	$: tips1 = false;
	$: tips2 = false;

	$: errshow = false;
	$: errtext = '';
	async function loginHandler() {
		errshow = false;
		errtext = '';
		tips1 = tips2 = dis = false;
		dis = false;
		if (username.length <= 0) {
			tips1 = true;
			return;
		}
		if (password.length <= 0) {
			tips2 = true;
			return;
		}
		dis = true;
		let result = await login(username, password);
		if (result.pass) {
			localStorage.setItem('user',JSON.stringify(result.result));
			location.href = '/user/me';
		} else {
			errtext = result.message;
			errshow = true;
			dis = false;
		}
	}
	function sleep(ms){
		return new Promise(resolve=>{
			setTimeout(resolve,ms)
		});
	}
</script>

<Tip text={errtext} display={errshow} />
<Tip text="请输入用户名" display={tips1} />
<Tip text="请输入密码" display={tips2} />
<div>
	<h1>Login</h1>
	<input type="text" name="username" bind:value={username} class="inline-block" />
	<input type="password" name="password" bind:value={password} />
	<button on:click={loginHandler} disabled={dis}>Login</button>
</div>
<a href="">还没账户？在此注册</a>