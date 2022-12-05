<script lang="ts">
	import { clickOutside } from '$lib/clickOutside';
	import { INavItem } from './type';
	export let navItem: INavItem;
	let active = false;
</script>

{#if navItem.children}
	<div class="relative">
		<span
			on:click={() => (active = true)}
			on:keydown={() => (active = true)}
			class="no-underline text-opacity-50 hover:text-opacity-80 transition p-2 cursor-pointer mx-2"
		>
			{navItem.label}
		</span>
		{#if active}
			<div
				class="w-max bg-gray-400 absolute flex flex-col"
				use:clickOutside
				on:outclick={() => (active = false)}
			>
				{#each navItem.children as child}
					<span class="hover:bg-gray-200">
						<svelte:self navItem={child} />
					</span>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	<a
		href={navItem.href}
		class="no-underline text-opacity-50 hover:text-opacity-80 transition p-2 mx-2"
	>
		{navItem.label}
	</a>
{/if}
