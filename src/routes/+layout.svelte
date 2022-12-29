<script>
	import '@mdi/font/css/materialdesignicons.min.css';
	import 'fluent-svelte/theme.css';
	import { onMount } from 'svelte';
	import '../app.css';
	import NavLink from '../lib/Nav/NavLink.svelte';
	import UserNav from '../lib/UserNav/UserNav.svelte';
	import Notice from '../lib/notice.svelte';
	import netlifyIdentity from 'netlify-identity-widget';
	import { createUser, redirectURL } from '$lib/store.js';
	import { writable } from 'svelte/store';

	let user = writable(null);
	onMount(()=>{
		netlifyIdentity.init();
		user = createUser();
	})
	$: loginstate = !!$user;
	$: username = $user !== null ? $user.username : ' there!';

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
				{ label: '关于我们', target: '/about' },
				{ label: '登录', target: '/login' }
			]
		},
		{
			name: '相关链接',
			links: [{ label: 'AOOS', target: 'https://AOOS.com' }]
		}
	];
	let userOpen = false;
	let mobileMenuOpen = false;
	$: UserNavs = [
		loginstate ? { href: '/user/me', text: '我', id: 'me' } : {},
		loginstate ? { href: '/user/settings', text: '设置', id: 'settings' } : {},
		{
			href: loginstate ? '/' : '/',
			text: loginstate ? '登出' : '登录',
			id: 'login/logout',
			clickHandler: (info) => {
				if (info.text == '登录') {
					handleUserAction('login');
				} if (info.text == '登出') {
					handleUserAction('logout');
				}
			}
		}
	];
	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		userOpen = false;
	};
	function handleUserAction(action) {
		if (action === 'login' || action === 'signup') {
			netlifyIdentity.open(action);
			netlifyIdentity.on('login', (u) => {
				user.login(u);
				netlifyIdentity.close();
				if ($redirectURL !== '') {
					navigate($redirectURL);
					redirectURL.clearRedirectURL();
				}
			});
		} else if (action === 'logout') {
			navigate('/');
			user.logout();
			netlifyIdentity.logout();
		}
	}
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

<div class="flex bg-gray-800 text-white mt-20" style="width:100%; vertical-align: middle;">
	<div class="flex items-center" style="margin:70px;">
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
		<ul
			class="hidden sm:inline-block"
			style="text-align: center; margin:20px; margin-left:30px; margin-top:30px;"
		>
			<h6 class="text-gray-400 truncate" style="margin-bottom: 10px;">{links.name}</h6>
			{#each links.links as link}
				<li>
					<a href={link.target} class="truncate text-gray-300 hover:text-gray-50 no-underline"
						>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	{/each}

	<div class="ml-7 hidden sm:inline-block">
		<h6 class="text-gray-500 truncate" style="margin: 20px;margin-bottom:10px; margin-top:30px;">
			网站很棒？与朋友分享我们
		</h6>
		<ul class="inline-block ml-4 truncate no-underline" style="">
			<li style="float: right; margin:5px;">
				<a href="https://www.douyin.com/">
					<svg
						width="27"
						height="27"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M21.358 19.1399C15.4694 18.8558 11.3762 20.9553 9.07838 25.4384C5.63169 32.163 8.48026 43.1666 19.9788 43.1666C31.4774 43.1666 31.81 32.0554 31.81 30.8914C31.81 30.1154 31.81 25.7764 31.81 17.8746C34.2694 19.4323 36.343 20.37 38.0308 20.6877C39.7186 21.0053 40.7915 21.1461 41.2497 21.11V14.6343C39.6886 14.4461 38.3386 14.0873 37.1997 13.5581C35.4913 12.7643 32.1037 10.5611 32.1037 7.33208C32.106 7.34787 32.106 6.51493 32.1037 4.83325H24.9857C24.9645 20.6493 24.9645 29.3353 24.9857 30.8914C25.0175 33.2255 23.2068 36.4905 19.5355 36.4905C15.8642 36.4905 14.0535 33.2281 14.0535 31.1239C14.0535 29.8357 14.496 27.9685 16.3251 26.5858C17.4098 25.7658 18.9153 25.4384 21.358 25.4384C21.358 24.6828 21.358 22.5833 21.358 19.1399Z"
							fill="none"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linejoin="round"
						/></svg
					>
				</a>
			</li>
			<li style="float: right; margin:5px;">
				<a href="https://www.douyin.com/">
					<svg
						width="27"
						height="27"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M24.0003 42.3334C34.1255 42.3334 42.3337 34.1253 42.3337 24.0001C42.3337 13.8749 34.1255 5.66675 24.0003 5.66675C13.8751 5.66675 5.66699 13.8749 5.66699 24.0001C5.66699 26.4858 6.80727 27.6871 8.61419 28.7448C10.4211 29.8025 13.8204 29.6269 16.1327 31.7014C18.445 33.776 18.6011 37.1507 19.0799 38.7905C19.5588 40.4303 21.5146 42.3334 24.0003 42.3334Z"
							fill="none"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linejoin="round"
						/><path
							d="M19.5264 18.5412C18.988 19.8493 18.7188 21.3866 18.7188 23.153C18.7188 24.8329 18.8971 26.496 19.2539 28.1424L19.2539 28.1424C19.6113 29.7916 21.2381 30.8389 22.8873 30.4815C22.9472 30.4685 23.0067 30.4537 23.0657 30.4372C24.8653 29.9322 26.4325 29.2711 27.7673 28.454C29.0152 27.6899 30.1779 26.7253 31.2556 25.56L31.2556 25.56C32.4013 24.3211 32.3258 22.3879 31.0868 21.2421C31.0514 21.2094 31.0152 21.1775 30.9783 21.1465C29.7116 20.0817 28.3858 19.1254 27.0008 18.2774C25.5547 17.3921 24.1384 16.8579 22.7519 16.6749L22.7518 16.6749C21.3779 16.4935 20.0539 17.2596 19.5264 18.5412Z"
							fill="none"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linejoin="round"
						/></svg
					>
				</a>
			</li>
			<li style="float: right; margin:5px;">
				<a href="https://twitter.com/">
					<svg
						width="27"
						height="27"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"
							fill="none"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linejoin="round"
						/></svg
					>
				</a>
			</li>
			<li style="float: right; margin:5px;">
				<a href="https://m.weibo.cn/">
					<svg
						width="27"
						height="27"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M12.5618 16.4109C9.21763 19.6608 2.16324 29.146 7.36253 35.9317C12.5618 42.7174 27.2821 40.0998 33.359 35.3193C39.4358 30.5388 38.836 27.5848 37.5184 26.2833C36.2009 24.9818 32.3556 26.297 31.2793 24.526C30.203 22.7551 33.1957 18.3311 30.6452 16.9312C28.0948 15.5313 23.6907 20.5811 21.7015 19.269C19.7122 17.9568 23.8906 13.6729 21.7015 12.4384C19.5123 11.204 15.906 13.161 12.5618 16.4109Z"
							fill="none"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linejoin="round"
						/><path
							d="M43.3787 16.5159C43.1435 13.3848 41.799 10.5632 39.7372 8.44277C37.7247 6.37311 35.0287 4.9715 32.0137 4.60229"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linecap="round"
						/><path
							d="M37.2919 16.9313C37.1627 15.2916 36.4247 13.8139 35.2928 12.7034C34.188 11.6195 32.7079 10.8855 31.0527 10.6921"
							stroke="#ffffff"
							stroke-width="3"
							stroke-linecap="round"
						/><path
							d="M25 30C25 32.2091 22.3137 34 19 34C15.6863 34 13 32.2091 13 30C13 27.7909 15.6863 26 19 26C22.3137 26 25 27.7909 25 30Z"
							fill="#ffffff"
						/></svg
					>
				</a>
			</li>
		</ul>
	</div>
</div>
