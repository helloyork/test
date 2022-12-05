<script>
	//你有没有注意到一个神奇的语法错误？?
	import '@mdi/font/css/materialdesignicons.min.css';
	import 'fluent-svelte/theme.css';
	import '../app.css';
	const navItems = [
		{ label: '关于我们', href: '/about' },
		{ label: '联系我们', href: '/contact' },
		{ label: 'Test', href: '/test' },
		{ label: '资源', href: '/storage', submenu: [{ label: '', href: '' }] },
		{ label: 'Test', href: '/test' }
	];
	let y = 0;
	$: if (y >= 300) alert('hiya!');
</script>

<svelte:window bind:scrollY={y} />
<div class="flex flex-col h-full">
	<div
		id="header-div"
		class="h-12 bg-cyan-500 text-white flex justify-center flex-col space-x-4 px-5"
		style="height: 60px;"
	>
		<div class="h-8 flex flex-row  items-center">
			<span class="font-bold flex " style="margin-right: 20px;">
				<a href="../" style="padding:13px 25px;">Nomen 小队</a>
			</span>
			{#each navItems as item}
				<a
					href={item.href}
					class="no-underline text-opacity-50 hover:text-opacity-80 transition p-2"
					id="header-element"
					style="padding:13px 25px;">{item.label}</a
				>
			{/each}
		</div>
	</div>
	<div class="flex flex-auto ">
		<div class="container m-auto h-full">
			<slot />
		</div>
	</div>
</div>

<style>
	#header-element:hover {
		color: rgb(180, 255, 241);
		background-color: rgb(33, 222, 191);
	}
	#header-element {
		display: inline-block;
	}
	#header-element a {
		display: block;
		color: white;
		text-align: center;
		padding: 18px 25px;
		text-decoration: none;
		font-weight: 100;
	}
	#header-element a:hover:not(.active) {
		background-color: #ffffff0e;
	}
	.active {
		background-color: rgba(0, 0, 0, 0.136);
	}
	.active:hover {
		background-color: rgba(0, 0, 0, 0.053);
	}
	.header-element-last {
		float: right;
		background-color: #ffffff45;
	}
</style>
