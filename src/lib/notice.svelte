<script>
	import Underline from './underline.svelte';
	let AnnouncingShow = true;
</script>

<div class="bg-indigo-700 {AnnouncingShow ? 'block' : 'hidden'} items-center">
	<div class="mx-auto max-w-7xl py-1 px-3 sm:px-6 lg:px-8  items-center">
		<div class="flex flex-wrap justify-between  items-center">
			<div class="flex w-0 flex-1  items-center">
				<span class="flex rounded-lg bg-indigo-800 p-2">
					<!-- Heroicon name: outline/megaphone -->
					<svg
						width="27"
						height="27"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><g clip-path="url(#icon-7d81bc46c0cb753)"
							><path
								d="M24 40C32.2843 40 39 33.2843 39 25C39 16.7157 32.2843 10 24 10C15.7157 10 9 16.7157 9 25C9 33.2843 15.7157 40 24 40Z"
								stroke="#ffffff"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/><path
								d="M20.0002 11C21.8049 12.0083 23.5002 13.5 23.3581 15.4454C23.2445 17 21.915 17.3469 21.6369 18.4711C21.359 19.5953 22.9674 20.8217 20.2464 22.636C18.4324 23.8455 12.971 26.1447 9 24"
								stroke="#ffffff"
								stroke-width="3"
								stroke-linecap="round"
							/><path
								d="M9.50011 24.5C6.50011 26.3883 2.06824 31.521 4.00056 35C6.5 39.5 16.0004 35.6906 27.0001 27C37.9999 18.3094 42.2291 5.60642 42.2291 5.60642L37.0005 7"
								stroke="#ffffff"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/><path
								d="M26.0006 40C26.0006 40 26.5003 35 30 32C33.4997 29 38.0007 29 38.0007 29"
								stroke="#ffffff"
								stroke-width="3"
								stroke-linecap="round"
							/></g
						><defs
							><clipPath id="icon-7d81bc46c0cb753"
								><rect width="48" height="48" fill="#ffffff" /></clipPath
							></defs
						></svg
					>
				</span>
				<p class="ml-3 truncate font-medium text-white  items-center" style="margin:0 !important;">
					<span class="md:hidden items-center" style=""
						><p class="items-center" style="margin:0 !important; margin-left:10px;">
							与我们加入网站的搭建！
							<Underline href="/about"><h6 class="text-white">与我们联系</h6></Underline>
						</p></span
					>
					<span class="hidden md:inline items-center" style=""
						><p class="items-center" style="margin:0 !important; margin-left:10px;">
							<strong>我们需要你！</strong>加入网站的搭建，成为第一个得知新消息的人。
							<Underline href="/about"><h6 class="text-white">与我们联系</h6></Underline>
						</p></span
					>
				</p>
			</div>
			<div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
				<button
					type="button"
					class="-mr-1 flex rounded-md p-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
					on:click={() => (AnnouncingShow = false)}
				>
					<span class="sr-only">Dismiss</span>
					<svg
						class="h-6 w-6 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

<slot />
