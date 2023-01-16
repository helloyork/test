<script>
	// @ts-nocheck
	import { browser } from '$app/environment';
	export let href = '';
	$: link = '';
	export let size = false;

	function jugeUrl(url) {
		return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(url) == true;
	}
	$: if (browser)
		if (!href.startsWith('/') && jugeUrl(href)) {
			link = `/redirect?rl=${href}`;
		} else link = href;
</script>

<a
	class="inline-block underline decoration-indigo-500/50 text-black {size == true
		? 'decoration-8'
		: 'decoration-4'} hover:text-black underline-offset-0"
	href={link}
>
	<slot />
</a>
