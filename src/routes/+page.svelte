<title>awa</title>

<script type="ts">
	import { spring } from 'svelte/motion';
	import type { PageData } from './$types';
	export let data: PageData;
    
	let pos = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let size = spring(10);
</script>

<svg
	on:mousemove={(e) => pos.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
	style="height: 100vh;width:100vw"
>
	<circle fill="red" cx={$pos.x} cy={$pos.y} r={$size} />
</svg>

<h1>没错你正在访问的网站由神奇海螺运行</h1>

