<script>
	export let href = '/';
	export let text = '';
	export let clickHandler=()=>{};
	export let id;
</script>

<a {href} class="block px-4 py-2 text-sm text-gray-700 no-underline" role="menuitem" tabindex="-1" {id}
	on:click={()=>clickHandler({href,text,id})}>{text}
</a>

