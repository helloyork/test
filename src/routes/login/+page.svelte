<script>
	import Tip from './tip.svelte';
	import { login} from '$lib/user.js';
	import { onMount } from 'svelte';
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
	onMount(()=>{
        if(localStorage.getItem('user')!==undefined&&JSON.parse(localStorage.getItem('user')).username!==undefined){
            location.href='/user/me'
        }
    })
</script>

<Tip text={errtext} display={errshow} />
<Tip text="请输入用户名" display={tips1} />
<Tip text="请输入密码" display={tips2} />
<div>
	<h1>Login</h1>
	<input type="text" name="username" bind:value={username} class="inline-block" placeholder="用户名"/>
	<input type="password" name="password" bind:value={password} placeholder="密码"/>
	<button on:click={loginHandler} disabled={dis}>登录</button>
</div>
<a href="/login/register">还没账户？在此注册</a>