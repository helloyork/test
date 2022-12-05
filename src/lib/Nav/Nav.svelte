<script lang="ts">
	import NavItem from './NavItem.svelte';
	import { INavItem } from './type';
	export let navItems: INavItem[];
</script>

<div
	id="header-div"
	class="h-12 bg-cyan-500 text-white flex justify-center flex-col space-x-4 px-5"
	style="height: 60px;"
>
	<div class="h-8 flex flex-row  items-center">
		<span class="font-bold flex " style="margin-right: 20px;">
			<a href="../" style="padding:13px 25px;">Nomen 小队</a>
		</span>
		{#each navItems as navItem}
			<NavItem {navItem} />
		{/each}
	</div>
</div>

