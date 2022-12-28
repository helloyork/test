<script>
	import '@mdi/font/css/materialdesignicons.min.css';
	import 'fluent-svelte/theme.css';
	import { onMount } from 'svelte';
	import '../app.css';
	import NavLink from '../lib/Nav/NavLink.svelte';
	import UserNav from '../lib/UserNav/UserNav.svelte';
	import Notice from '../lib/notice.svelte';
	import { locallogin } from '$lib/user.js';
	import Underline from '../lib/underline.svelte';
	const links = [
		{ label: '主页', target: '/' },
		{ label: '关于我们', target: '/about' },
		{ label: '项目与资源', target: '/storage' },
		{ label: '测试', target: '/test' }
	];
	const footLinks = [
		{
			name: '与我们相关',
			links: [{ label: 'QQ群: 2418207411', target: 'https://jq.qq.com/?_wv=1027&k=6x5B4MUl' }]
		},
		{
			name: '本页导航',
			links: [
				{ label: '主页', target: '/' },
				{ label: '关于', target: '/about' }
			]
		},
		{
			name: '相关链接',
			links: []
		},
		{
			name: '友情链接',
			links: []
		}
	];
	let userOpen = false;
	let mobileMenuOpen = false;
	$: loginstate = false;
	$: UserNavs = [
		loginstate ? { href: '/user/me', text: '我', id: 'me' } : {},
		loginstate ? { href: '/user/settings', text: '设置', id: 'settings' } : {},
		{
			href: loginstate ? '/' : '/login',
			text: loginstate ? '登出' : '登录',
			id: 'login/logout',
			clickHandler: (info) => {
				if (info.text == '登出') {
					localStorage.setItem('user', JSON.stringify({}));
					location.href = '/';
				}
			}
		}
	];
	onMount(() => {
		locallogin(localStorage).then((r) => {
			if (r) {
				localStorage.setItem('user', JSON.stringify(r.result));
				console.log('login sc');
				loginstate = true;
			} else {
				console.log('login fs');
			}
		});
	});
	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		userOpen = false;
	};
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="{mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class="{mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img class="block h-5 w-auto lg:block" src="/gray.png" alt="" />
					<a
						class="text-zinc-300 focus:outline-none text-lg visited:text-zinc-300 no-underline"
						style="margin-right: 20px;margin-left: 10px; =="
						href="/"
						alt="Nomen 小队">Nomen 小队</a
					>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						{#each links as item}
							<NavLink {...item} />
						{/each}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button
					type="button"
					class="hidden rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:block"
				>
					<span class="sr-only">View notifications</span>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
						/>
					</svg>
				</button>
				<div class="relative ml-3 m-3" on:focusout={handleDropdownFocusLoss}>
					<div>
						<button
							type="button"
							class="flex rounded-full text-sm hover:text-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2  focus:ring-offset-gray-800"
							id="user-menu-button"
							on:click={() => (userOpen = !userOpen)}
						>
							<span class="sr-only">Open user menu</span>
							<h6 class="{loginstate ? 'hidden' : 'block'} text-gray-300 m-1.5">未登录</h6>
							<svg
								width="27"
								height="27"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="{loginstate ? 'block' : 'hidden'} h-6 w-6"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
									stroke="#9ca3af"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/><path
									d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z"
									fill="none"
									stroke="#9ca3af"
									stroke-width="3"
									stroke-linejoin="round"
								/><path
									d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113"
									stroke="#9ca3af"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
						</button>
					</div>
					<div
						class="{userOpen
							? 'block'
							: 'hidden'} right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none fixed m-2"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabindex="-1"
					>
						{#each UserNavs as un}
							{#if un.id !== undefined}
								<UserNav {...un} />
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="sm:hidden" id="mobile-menu">
		<div class="{mobileMenuOpen ? 'block' : 'hidden'} space-y-1 px-2 pt-2 pb-3">
			{#each links as item}
				<NavLink {...item} type="mobile" />
			{/each}
		</div>
	</div>
</nav>

<Notice />

<slot />

<div
	class="flex bg-gray-800 text-white"
	style="width:100%; grid-template-columns: auto auto auto; grid-gap: 10px; vertical-align: middle;"
>
	<div class="flex items-center" style="position:relative; margin:50px;">
		<img class="flex h-8 w-auto sm:item-center" src="/light.png" alt="" />
		<a
			class="text-zinc-300 focus:outline-none text-lg visited:text-zinc-300 no-underline"
			style="margin-right: 20px;margin-left: 10px; "
			href="/"
			alt="Nomen 小队"
			><h1 size="true" class="text-white text-4xl" style="font-style:italic;">NOMEN TEAM</h1></a
		>
	</div>
	{#each footLinks as links}
		<ul class="hidden sm:inline-block" style="text-align: center; margin:20px;">
			<h6 class="text-gray-300 truncate" style="margin-bottom: 10px;">{links.name}</h6>
			{#each links.links as link}
				<li><a href={link.target} class="hover:text-white truncate">{link.label}</a></li>
			{/each}
		</ul>
	{/each}
	<div />
</div>
