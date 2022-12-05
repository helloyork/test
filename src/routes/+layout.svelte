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
				{ label: '下北泽刊阅', href: 'https://1919810.com' },
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

