<script>
	import Aboutus from "../../lib/svelte/aboutus.svelte";
    import Underline from "../../lib/svelte/underline.svelte";
</script>

<div class="bg-white" style="margin-top: 100px; margin-bottom:160px;" id="contactus">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="sm:text-center">
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">联系我们</p>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">CONTACT US</p>
		</div>

		<div class="mt-20 sm:mx-auto md:max-w-">
			<div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-4 sm:mx-auto md:gap-y-8">
				<div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
					<div class="sm:min-w-0 sm:flex-1">
						<p class="text-lg font-semibold leading-8 text-gray-900">
							<Underline>加入我们|与我们合作</Underline>
						</p>
						<p class="mt-2 text-base leading-7 text-gray-600">
							<a class="no-underline textgray-200" href="https://jq.qq.com/?_wv=1027&k=6x5B4MUl">QQ群|686367601</a>
						</p>
					</div>
				</div>

				<div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
					<div class="sm:min-w-0 sm:flex-1">
                        <p class="text-lg font-semibold leading-8 text-gray-900">
							<Underline>来访我们|网站合作</Underline>
						</p>
						<p class="mt-2 text-base leading-7 text-gray-600 no-underline textgray-200">队长|2418207411</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Aboutus></Aboutus>


