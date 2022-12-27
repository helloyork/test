<script>
	export const href = '';
	export let size = false;
</script>

<a
	class="inline-block underline decoration-indigo-500/50 text-black {size==true
		? 'decoration-8'
		: 'decoration-4'} hover:text-black underline-offset-0"
	{href}
>
	<slot />
</a>
