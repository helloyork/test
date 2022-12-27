import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { T as Tip } from "../../../../chunks/tip.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dis;
  let errshow;
  let errtext;
  let username, password, nickname = "";
  let tips1, tips2, tips3 = false;
  dis = false;
  errshow = false;
  errtext = "";
  return `<div class="${"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"}"><div class="${"w-full max-w-md space-y-8"}"><div><h2 class="${"mt-6 text-center text-5xl font-bold tracking-tight text-gray-900 my-4"}">\u6CE8\u518C</h2>
			<p class="${"mt-2 text-center text-sm text-gray-600"}">\u6216
				<a href="${"/login"}" class="${"font-medium text-indigo-600 hover:text-indigo-500"}">\u767B\u5F55</a></p></div>
		<input type="${"hidden"}" name="${"remember"}" value="${"true"}">
		<div class="${"-space-y-px rounded-md shadow-sm"}"><div><input id="${"username"}" name="${"username"}" autocomplete="${"email"}" required class="${"relative block w-full appearance-none rounded-none rounded-t-md border border-red-500" + escape("border-gray-300", true) + " px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}" placeholder="${"\u7528\u6237\u540D"}"${add_attribute("value", username, 0)}></div>
			<div><input id="${"nickname"}" name="${"nickname"}" type="${"text"}" required class="${"relative block w-full appearance-none rounded-none border " + escape("border-gray-300", true) + " px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}" placeholder="${"\u6635\u79F0"}"${add_attribute("value", nickname, 0)}></div>
			<div><input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"current-password"}" required class="${"relative block w-full appearance-none rounded-none rounded-b-md border " + escape("border-gray-300", true) + " px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}" placeholder="${"\u5BC6\u7801"}"${add_attribute("value", password, 0)}></div></div>
		${validate_component(Tip, "Tip").$$render($$result, { text: errtext, display: errshow }, {}, {})}
		${validate_component(Tip, "Tip").$$render($$result, { text: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", display: tips1 }, {}, {})}
		${validate_component(Tip, "Tip").$$render($$result, { text: "\u8BF7\u8F93\u5165\u6635\u79F0", display: tips3 }, {}, {})}
		${validate_component(Tip, "Tip").$$render($$result, { text: "\u8BF7\u8F93\u5165\u5BC6\u7801", display: tips2 }, {}, {})}
		<div><button type="${"submit"}" class="${"group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}" ${dis ? "disabled" : ""}><span class="${"absolute inset-y-0 left-0 flex items-center pl-3"}"></span>
				\u6CE8\u518C
			</button></div></div></div>`;
});
export {
  Page as default
};
