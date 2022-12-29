<script>
	import Tip from './tip.svelte';
	import { login } from '$lib/user.js';
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
			localStorage.setItem('user', JSON.stringify(result.result));
			location.href = '/user/me';
		} else {
			errtext = result.message;
			errshow = true;
			dis = false;
		}
	}
	function sleep(ms) {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}
	onMount(() => {
		if (
			localStorage.getItem('user') !== undefined &&
			JSON.parse(localStorage.getItem('user')).username !== undefined
		) {
			location.href = '/user/me';
		}
	});
</script>


<div data-netlify-identity-menu />

<div data-netlify-identity-button>Login with Netlify Identity</div>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<h2 class="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900 my-4">登录</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				或
				<a href="/login/register" class="font-medium text-indigo-600 hover:text-indigo-500">注册</a>
			</p>
		</div>
		<div>
			<button
				type="submit"
				class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				on:click={loginHandler}
				disabled={dis}
			>
				<span class="absolute inset-y-0 left-0 flex items-center pl-3">
				</span>
				登录
			</button>
		</div>
	</div>
</div> 

