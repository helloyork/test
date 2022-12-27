import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { T as Tip } from "../../../chunks/tip.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dis;
  let tips1;
  let tips2;
  let errshow;
  let errtext;
  let username, password = "";
  dis = false;
  tips1 = false;
  tips2 = false;
  errshow = false;
  errtext = "";
  return `<div class="${"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"}"><div class="${"w-full max-w-md space-y-8"}"><div>
			<h2 class="${"mt-6 text-center text-5xl font-bold tracking-tight text-gray-900 my-4"}">\u767B\u5F55</h2>
			<p class="${"mt-2 text-center text-sm text-gray-600"}">\u6216
				<a href="${"/login/register"}" class="${"font-medium text-indigo-600 hover:text-indigo-500"}">\u6CE8\u518C</a></p></div>
		<input type="${"hidden"}" name="${"remember"}" value="${"true"}">
		<div class="${"-space-y-px rounded-md shadow-sm"}"><div><input id="${"username"}" name="${"username"}" autocomplete="${"email"}" required class="${"relative block w-full appearance-none rounded-none rounded-t-md border " + escape(tips1 ? "border-red-500" : "border-gray-300", true) + " px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}" placeholder="${"\u7528\u6237\u540D"}"${add_attribute("value", username, 0)}></div>
			<div><input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"current-password"}" required class="${"relative block w-full appearance-none rounded-none rounded-b-md border " + escape(tips2 ? "border-red-500" : "border-gray-300", true) + " px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}" placeholder="${"\u5BC6\u7801"}"${add_attribute("value", password, 0)}></div></div>
		${validate_component(Tip, "Tip").$$render($$result, { text: errtext, display: errshow }, {}, {})}
		${validate_component(Tip, "Tip").$$render($$result, { text: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", display: tips1 }, {}, {})}
		${validate_component(Tip, "Tip").$$render($$result, { text: "\u8BF7\u8F93\u5165\u5BC6\u7801", display: tips2 }, {}, {})}
		<div class="${"flex items-center justify-between"}"><div class="${"flex items-center"}">
				</div>
			<div class="${"text-sm"}"><a href="${"#"}" class="${"font-medium text-indigo-600 hover:text-indigo-500"}">\u5FD8\u8BB0\u5BC6\u7801\uFF1F</a></div></div>

		<div><button type="${"submit"}" class="${"group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}" ${dis ? "disabled" : ""}><span class="${"absolute inset-y-0 left-0 flex items-center pl-3"}">
					</span>
				\u767B\u5F55
			</button></div></div></div>`;
});
export {
  Page as default
};
