<script>
	import Tip from '../tip.svelte';
	import { register } from '$lib/user.js';
	import { onMount } from 'svelte';
	let username,
		password,
		nickname = '';
	$: dis = false;
	let tips1,
		tips2,
		tips3 = false;

	$: errshow = false;
	$: errtext = '';
	async function registerHandler() {
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
		let result = await register(username, nickname, password);
		if (result.pass) {
			localStorage.setItem('user', JSON.stringify(result.result));
			location.href = '/user/me';
		} else {
			errtext = result.message;
			errshow = true;
			dis = false;
		}
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

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<h2 class="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900 my-4">注册</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				或
				<a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">登录</a>
			</p>
		</div>
		<input type="hidden" name="remember" value="true" />
		<div class="-space-y-px rounded-md shadow-sm">
			<div>
				<input
					id="username"
					name="username"
					autocomplete="email"
					required
					class="relative block w-full appearance-none rounded-none rounded-t-md border border-red-500{tips1
						? 'border-red-500'
						: 'border-gray-300'} px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="用户名"
					bind:value={username}
				/>
			</div>
			<div>
				<input
					id="nickname"
					name="nickname"
					type="text"
					required
					class="relative block w-full appearance-none rounded-none border {tips3
						? 'border-red-500'
						: 'border-gray-300'}  px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="昵称"
					bind:value={nickname}
				/>
			</div>
			<div>
				<input
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					required
					class="relative block w-full appearance-none rounded-none rounded-b-md border {tips2
						? 'border-red-500'
						: 'border-gray-300'} px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="密码"
					bind:value={password}
				/>
			</div>
		</div>
		<Tip text={errtext} display={errshow} />
		<Tip text="请输入用户名" display={tips1} />
		<Tip text="请输入昵称" display={tips3} />
		<Tip text="请输入密码" display={tips2} />
		<div>
			<button
				type="submit"
				class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				on:click={registerHandler}
				disabled={dis}
			>
				<span class="absolute inset-y-0 left-0 flex items-center pl-3" />
				注册
			</button>
		</div>
	</div>
</div>
