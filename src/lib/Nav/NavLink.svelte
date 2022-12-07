<script lang="ts">
	import { page } from '$app/stores';
	export let target = '/';
	export let label = '主页';
</script>

<a
	href={target}
	class={$page.url.pathname === target
		? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
		: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
	aria-current="page">{label}</a
>
