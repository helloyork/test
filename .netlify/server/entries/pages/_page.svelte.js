import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const Underline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const href = "";
  let { size = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<a class="${"inline-block underline decoration-indigo-500/50 " + escape(size == true ? "decoration-8" : "decoration-4", true) + " hover:text-black underline-offset-0"}"${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-indigo-700 " + escape("block", true)}"><div class="${"mx-auto max-w-7xl py-1 px-3 sm:px-6 lg:px-8"}"><div class="${"flex flex-wrap items-center justify-between"}"><div class="${"flex w-0 flex-1 items-center"}"><span class="${"flex rounded-lg bg-indigo-800 p-2"}">
					<svg width="${"27"}" height="${"27"}" viewBox="${"0 0 48 48"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#icon-7d81bc46c0cb753)"}"><path d="${"M24 40C32.2843 40 39 33.2843 39 25C39 16.7157 32.2843 10 24 10C15.7157 10 9 16.7157 9 25C9 33.2843 15.7157 40 24 40Z"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M20.0002 11C21.8049 12.0083 23.5002 13.5 23.3581 15.4454C23.2445 17 21.915 17.3469 21.6369 18.4711C21.359 19.5953 22.9674 20.8217 20.2464 22.636C18.4324 23.8455 12.971 26.1447 9 24"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path><path d="${"M9.50011 24.5C6.50011 26.3883 2.06824 31.521 4.00056 35C6.5 39.5 16.0004 35.6906 27.0001 27C37.9999 18.3094 42.2291 5.60642 42.2291 5.60642L37.0005 7"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M26.0006 40C26.0006 40 26.5003 35 30 32C33.4997 29 38.0007 29 38.0007 29"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path></g><defs><clipPath id="${"icon-7d81bc46c0cb753"}"><rect width="${"48"}" height="${"48"}" fill="${"#ffffff"}"></rect></clipPath></defs></svg></span>
				<p class="${"ml-3 truncate font-medium text-white"}"><span class="${"md:hidden text-ellipsis"}">\u4E0E\u6211\u4EEC\u52A0\u5165\u7F51\u7AD9\u7684\u642D\u5EFA\uFF01<a class="${"text-ellipsis inline-block underline decoration-indigo-500/70 decoration-8 pl-2 hover:text-gray-300"}" href="${"/about"}">\u4E0E\u6211\u4EEC\u8054\u7CFB</a></span>
					<span class="${"hidden md:inline"}">\u6211\u4EEC\u9700\u8981\u4F60\uFF01\u52A0\u5165\u7F51\u7AD9\u7684\u642D\u5EFA\uFF0C\u6210\u4E3A\u7B2C\u4E00\u4E2A\u5F97\u77E5\u65B0\u6D88\u606F\u7684\u4EBA\u3002 <a class="${"inline-block underline decoration-indigo-500/70 decoration-8 pl-2 hover:text-gray-300"}" href="${"/about"}">\u4E0E\u6211\u4EEC\u8054\u7CFB</a></span></p></div>
			<div class="${"order-2 flex-shrink-0 sm:order-3 sm:ml-3"}"><button type="${"button"}" class="${"-mr-1 flex rounded-md p-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"}"><span class="${"sr-only"}">Dismiss</span>
					<svg class="${"h-6 w-6 text-white"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div></div></div></div>

<div class="${"isolate bg-white"}"><span class="${"flex"}" style="${""}"><img src="${"/THIS IS A WAR.png"}" alt="${"THIS IS A WAR"}"></span>
	<main><div class="${"relative px-6 lg:px-8"}"><div class="${"mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40"}"><div><div class="${"hidden sm:mb-8 sm:flex sm:justify-center"}"></div>
					<div><h1 class="${"text-4xl font-bold tracking-tight sm:text-center sm:text-5xl"}">\u5C11\u5E74\u4ECD\u6B65\u9752\u6625\u65F6\uFF0C\u5F15\u822A\u660E\u706F${validate_component(Underline, "Underline").$$render($$result, { size: true }, {}, {
    default: () => {
      return `\u9886\u524D\u7A0B`;
    }
  })}</h1>
						<p class="${"mt-4 text-xl leading-9 text-gray-500 sm:text-center"}">\u4E00\u4E2A\u5BCC\u6709\u6F5C\u529B\u7684\u961F\u4F0D</p>
						<div class="${"mt-20 flex gap-x-4 sm:justify-center"}"><a href="${"/about"}" class="${"inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-700 hover:bg-indigo-700 hover:ring-indigo-600"}">\u52A0\u5165\u6211\u4EEC
								<span class="${"text-indigo-200"}" aria-hidden="${"true"}">\u2192</span></a>
							<a href="${"/about"}" class="${"inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"}">\u8054\u7CFB\u6211\u4EEC
							</a></div></div>
					<div class="${"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"}"></div></div></div></div></main></div>

<div class="${"bg-white py-24 sm:py-32 lg:py-40"}"><div class="${"mx-auto max-w-7xl px-6 lg:px-8"}"><div class="${"sm:text-center"}">
			<p class="${"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">\u5173\u4E8E\u6211\u4EEC</p>
			<p class="${"mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"}">NOMEN TEAM</p></div>

		<div class="${"mt-20 max-w-lg sm:mx-auto md:max-w-none"}"><div class="${"grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"}"><div class="${"relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"}"><div class="${"flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"}">
						<svg width="${"27"}" height="${"27"}" viewBox="${"0 0 48 48"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 4H40"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M8 44H40"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 4V16L21 26"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M36 44V29.5L27 21"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 44V30L18.5 23.5"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M36 4V16L29.5 23.5"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M18 33H19"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M29.1465 32.6465L29.8536 33.3536"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M24 38H25"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></div>
					<div class="${"sm:min-w-0 sm:flex-1"}"><p class="${"text-lg font-semibold leading-8 text-gray-900"}">${validate_component(Underline, "Underline").$$render($$result, {}, {}, {
    default: () => {
      return `\u8303\u56F4\u5E7F`;
    }
  })}</p>
						<p class="${"mt-2 text-base leading-7 text-gray-600"}">\u53D1\u5C55\u76EE\u6807\u5E7F\uFF0C\u5BF9\u4F17\u591A\u5C1A\u672A\u9971\u548C\u62E5\u6709\u5E02\u573A\u7684\u9886\u57DF\u8FDB\u53D1\uFF0C\u62E5\u6709\u660E\u786E\u7684\u6838\u5FC3\u76EE\u6807\u548C\u65B9\u5411
						</p></div></div>

				<div class="${"relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"}"><div class="${"flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"}">
						<svg width="${"27"}" height="${"27"}" viewBox="${"0 0 48 48"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z"}" fill="${"none"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linejoin="${"round"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></div>
					<div class="${"sm:min-w-0 sm:flex-1"}"><p class="${"text-lg font-semibold leading-8 text-gray-900"}">${validate_component(Underline, "Underline").$$render($$result, {}, {}, {
    default: () => {
      return `\u9886\u57DF\u6DF1`;
    }
  })}</p>
						<p class="${"mt-2 text-base leading-7 text-gray-600"}">\u62E5\u6709\u7CBE\u901A\u5404\u4E2A\u9886\u57DF\u7684\u4EBA\u624D\uFF0C\u5404\u4E2A\u90E8\u95E8\u53D6\u957F\u8865\u77ED\uFF0C\u66F4\u597D\u7684\u53D1\u5C55\u4E0E\u57F9\u517B\u4EBA\u624D
						</p></div></div>

				<div class="${"relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"}"><div class="${"flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"}">
						<svg width="${"27"}" height="${"27"}" viewBox="${"0 0 48 48"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M42 4H6V14H42V4Z"}" fill="${"none"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linejoin="${"round"}"></path><path d="${"M42 19H6V29H42V19Z"}" fill="${"none"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linejoin="${"round"}"></path><path d="${"M42 34H6V44H42V34Z"}" fill="${"none"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linejoin="${"round"}"></path><path d="${"M21 9H27"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path><path d="${"M21 24H27"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path><path d="${"M21 39H27"}" stroke="${"#ffffff"}" stroke-width="${"3"}" stroke-linecap="${"round"}"></path></svg></div>
					<div class="${"sm:min-w-0 sm:flex-1"}"><p class="${"text-lg font-semibold leading-8 text-gray-900"}">${validate_component(Underline, "Underline").$$render($$result, {}, {}, {
    default: () => {
      return `\u5927\u4F6C\u4E91\u96C6`;
    }
  })}</p>
						<p class="${"mt-2 text-base leading-7 text-gray-600"}">\u4F17\u591A\u5927\u4F6C\u8FDC\u7A0B\u6307\u5BFC\uFF0C\u66F4\u597D\u7684\u5B66\u4E60\u4E0E\u7406\u89E3\u9886\u57DF\u77E5\u8BC6
						</p></div></div>

				<div class="${"relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"}"><div class="${"flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0"}">
						<svg class="${"h-8 w-8"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"}"></path></svg></div>
					<div class="${"sm:min-w-0 sm:flex-1"}"><p class="${"text-lg font-semibold leading-8 text-gray-900"}">${validate_component(Underline, "Underline").$$render($$result, {}, {}, {
    default: () => {
      return `\u961F\u5458\u6D3B\u8DC3`;
    }
  })}</p>
						<p class="${"mt-2 text-base leading-7 text-gray-600"}">\u5343\u91CC\u76F8\u9694\uFF0C\u6C47\u805A\u7F51\u7EDC</p></div></div></div></div></div></div>`;
});
export {
  Page as default
};
