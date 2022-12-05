<script lang="ts">
	//你有没有注意到一个神奇的语法错误？?
	import { INavItem } from '$lib/Nav/type';
	import '@mdi/font/css/materialdesignicons.min.css';
	import 'fluent-svelte/theme.css';
	import '../app.css';
	import Nav from '../lib/Nav/Nav.svelte';
	const navItems: INavItem = [
		{ label: '关于我们', href: '/about' },
		{ label: '联系我们', href: '/contact' },
		{ label: 'Test', href: '/test' },
		{
			label: '资源',
			href: '/storage',
			children: [
				{ label: '下北泽刊阅', href: '#114514' },
				{ label: 'te', href: '' },
				{ label: 'te', href: '' },
				{ label: 'te', href: '' },
				{ label: 'te', href: '' },
				{ label: 'te', href: '' },
				{ label: 'te', href: '' },
				{ label: 'te', href: '' }
			]
		},
		{ label: 'Test', href: '/test' }
	];
</script>

<div class="flex flex-col h-full">
	<Nav {navItems} />
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
