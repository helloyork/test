<script lang="ts">
	import { page } from '$app/stores';
	export let target = '/';
	export let label = '主页';
	export let type = 'desktop';
</script>

<a
	href={target}
	class={$page.url.pathname === target
		? type == 'desktop'
			? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium no-underline'
			: 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium no-underline'
		: type == 'desktop'
		? 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline'
		: 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline'}
	aria-current="page">{label}</a
>
