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
			id="header-element"
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
		id="header-element"
	>
		{navItem.label}
	</a>
{/if}
<style>
	#header-element:hover {
		color: rgb(180, 255, 241);
		background-color: rgb(21, 193, 223);
	}
	#header-element {
		display: inline-block;
		padding: 15px 15px;
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
		background-color: rgba(26, 194, 224, 0.803);
	}
</style>
