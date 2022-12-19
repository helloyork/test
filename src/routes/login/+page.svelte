<script>
	import Tip from './tip.svelte';
	let username,
		password = '';
	$: dis = false;
	$: tips1 = false;
	$: tips2 = false;

	$: errshow = false;
	$: errtext = '';
	async function loginHandler() {
		errshow=false;
		errtext='';
		tips1=tips2=dis=false
		dis = false;
		if (username.length <= 0) {
			tips1 = true;
			return;
		}
		if (password.length <= 0) {
			tips2 = true;
			return;
		}
		dis=true;
		fetch('/api/user/login', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		})
			.then((result) => result.json())
			.then((result) => {
				if(result.pass){
					location.href = '/user/me';
				}else{
					errtext=result.message;
					errshow=true;
					dis=false;
				}
			});
	}
</script>

<Tip text={errtext} display={errshow} />
<Tip text="请输入用户名" display={tips1} />
<Tip text="请输入密码" display={tips2} />
<form>
	<h1>Login</h1>
	<input type="text" name="username" bind:value={username} class="inline-block"/>
	<input type="password" name="password" bind:value={password} />
	<button on:click={loginHandler} disabled={dis}>Login</button>
</form>
