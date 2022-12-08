<script>
	export let href = '/';
	export let text = '';
	export let clickHandler=()=>{};
	export let id;
</script>

<a {href} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" {id}
	on:click={()=>clickHandler({href,text,id})}>{text}
</a>

<!-- <a
	href="/user/about"
	class="block px-4 py-2 text-sm text-gray-700"
	role="menuitem"
	tabindex="-1"
	id="user-menu-item-0">我</a
>
<a
	href="/user/settings"
	class="block px-4 py-2 text-sm text-gray-700"
	role="menuitem"
	tabindex="-1"
	id="user-menu-item-1">设置</a
>
<a
	class="block px-4 py-2 text-sm text-gray-700"
	role="menuitem"
	tabindex="-1"
	href="/"
	on:click={() => alert('你登出啦（敷衍')}
	id="user-menu-item-2">登出</a
> -->
