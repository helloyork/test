<script>
	import Tip from '../tip.svelte';
	import { register } from '$lib/user.js';
	import { onMount } from 'svelte';
	import { locallogin } from '../../../lib/user';
	let username,
		password,
        nickname = '';
	$: dis = false;
	let tips1,tips2,tips3 = false;

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
        if (nickname.length <= 0) {
			tips3 = true;
			return;
		}
		dis = true;
		let result = await register(username, nickname,password);
		if (result.pass) {
			localStorage.setItem('user',JSON.stringify(result.result));
			location.href = '/user/me';
		} else {
			errtext = result.message;
			errshow = true;
			dis = false;
		}
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
<Tip text="请输入昵称" display={tips3} />
<div>
	<h1>Login</h1>
	<input type="text" name="username" bind:value={username} class="inline-block" placeholder="用户名"/>
    <input type="text" name="nickname" bind:value={nickname} class="inline-block" placeholder="昵称"/>
	<input type="password" name="password" bind:value={password} placeholder="密码"/>
	<button on:click={loginHandler} disabled={dis}>注册</button>
</div>
<h6>用户名在注册后将无法修改</h6>
<a href="/login">已有账户？在此登录</a>