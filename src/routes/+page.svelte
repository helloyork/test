<script lang="ts">
	import Aboutus from '../lib/svelte/aboutus.svelte';
	import Underline from '../lib/svelte/underline.svelte';
	let size = true;
</script>	
<div class="isolate bg-white">
	<main>
		<div
			class="block relative px-6 lg:px-8"
			style="background-image: url(/T.png);background-repeat: no-repeat;background-size: 100% 100%;"
		>
			<div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
				<div>
					<div class="hidden sm:mb-8 sm:flex sm:justify-center" />
					<div>
						<h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
							少年仍步青春时，引航明灯<Underline size href="/about#aboutus">领前程</Underline>
						</h1>
						<p class="mt-4 text-xl leading-9 text-gray-500  sm:text-center">一个富有潜力的队伍</p>
						<div class="mt-20 flex gap-x-4 sm:justify-center">
							<a
								href="/about#contactus"
								class="inline-block no-underline rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-700 hover:bg-indigo-700 hover:ring-indigo-600"
							>
								加入我们
								<span class="text-indigo-200" aria-hidden="true">&rarr;</span>
							</a>
							<a
								href="/about#aboutus"
								class="inline-block no-underline rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
							>
								联系我们
							</a>
						</div>
					</div>
					<div
						class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					/>
				</div>
			</div>
		</div>
	</main>
</div>

<Aboutus />

<div class="">
	<div
		class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
	>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
			<span class="block">获取更多消息？</span>
			<span class="block text-indigo-600">加入或来访我们！</span>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow-sm">
				<a
					href="/about#contactus"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-bold text-white hover:bg-indigo-600 no-underline"
					>加入我们</a
				>
			</div>
			<div class="ml-3 inline-flex rounded-md shadow-sm hover:bg-indigo-100">
				<a
					href="/about"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-500 no-underline"
					>获取更多</a
				>
			</div>
		</div>
	</div>
</div>
<p class="text-gray-300/0">Nomen 小队</p>