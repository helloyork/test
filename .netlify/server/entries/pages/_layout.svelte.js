import { g as getContext, c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
const materialdesignicons_min = "";
const theme = "";
const app = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  const readonly_stores = {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
  Object.defineProperties(readonly_stores, {
    preloading: {
      get() {
        console.error("stores.preloading is deprecated; use stores.navigating instead");
        return {
          subscribe: stores.navigating.subscribe
        };
      },
      enumerable: false
    },
    session: {
      get() {
        removed_session();
        return {};
      },
      enumerable: false
    }
  });
  return readonly_stores;
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { target = "/" } = $$props;
  let { label = "\u4E3B\u9875" } = $$props;
  let { type = "desktop" } = $$props;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$unsubscribe_page();
  return `<a${add_attribute("href", target, 0)}${add_attribute(
    "class",
    $page.url.pathname === target ? type == "desktop" ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium no-underline" : "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium no-underline" : type == "desktop" ? "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline" : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline",
    0
  )} aria-current="${"page"}">${escape(label)}</a>`;
});
const UserNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "/" } = $$props;
  let { text = "" } = $$props;
  let { clickHandler = () => {
  } } = $$props;
  let { id } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0)
    $$bindings.clickHandler(clickHandler);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<a${add_attribute("href", href, 0)} class="${"block px-4 py-2 text-sm text-gray-700 no-underline"}" role="${"menuitem"}" tabindex="${"-1"}"${add_attribute("id", id, 0)}>${escape(text)}</a>

`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loginstate;
  let UserNavs;
  const links = [
    { label: "\u4E3B\u9875", target: "/" },
    { label: "\u5173\u4E8E\u6211\u4EEC", target: "/about" },
    { label: "\u9879\u76EE\u4E0E\u8D44\u6E90", target: "/storage" },
    { label: "\u6D4B\u8BD5", target: "/test" }
  ];
  loginstate = false;
  UserNavs = [
    loginstate ? { href: "/user/me", text: "\u6211", id: "me" } : {},
    loginstate ? {
      href: "/user/settings",
      text: "\u8BBE\u7F6E",
      id: "settings"
    } : {},
    {
      href: loginstate ? "/" : "/login",
      text: loginstate ? "\u767B\u51FA" : "\u767B\u5F55",
      id: "login/logout",
      clickHandler: (info) => {
        if (info.text == "\u767B\u51FA") {
          localStorage.setItem("user", JSON.stringify({}));
          location.href = "/";
        }
      }
    }
  ];
  return `<nav class="${"bg-gray-800"}"><div class="${"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"}"><div class="${"relative flex h-16 items-center justify-between"}"><div class="${"absolute inset-y-0 left-0 flex items-center sm:hidden"}">
				<button type="${"button"}" class="${"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>
					<svg class="${escape("block", true) + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg>
					<svg class="${escape("hidden", true) + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>
			<div class="${"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"}"><div class="${"flex flex-shrink-0 items-center"}"><img class="${"block h-5 w-auto lg:block"}" src="${"/gray.png"}" alt="${""}">
					<a class="${"text-zinc-300 focus:outline-none text-lg visited:text-zinc-300 no-underline"}" style="${"margin-right: 20px;margin-left: 10px; =="}" href="${"/"}" alt="${"Nomen \u5C0F\u961F"}">Nomen \u5C0F\u961F</a></div>
				<div class="${"hidden sm:ml-6 sm:block"}"><div class="${"flex space-x-4"}">${each(links, (item) => {
    return `${validate_component(NavLink, "NavLink").$$render($$result, Object.assign(item), {}, {})}`;
  })}</div></div></div>
			<div class="${"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}"><button type="${"button"}" class="${"hidden rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:block"}"><span class="${"sr-only"}">View notifications</span>
					<svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"}"></path></svg></button>
				<div class="${"relative ml-3 m-3"}"><div><button type="${"button"}" class="${"flex rounded-full text-sm hover:text-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"}" id="${"user-menu-button"}"><span class="${"sr-only"}">Open user menu</span>
							<h6 class="${escape(loginstate ? "hidden" : "block", true) + " text-gray-300 m-1.5"}">\u672A\u767B\u5F55</h6>
							<svg width="${"27"}" height="${"27"}" viewBox="${"0 0 48 48"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${escape(loginstate ? "block" : "hidden", true) + " h-6 w-6"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"}" stroke="${"#9ca3af"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z"}" fill="${"none"}" stroke="${"#9ca3af"}" stroke-width="${"3"}" stroke-linejoin="${"round"}"></path><path d="${"M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113"}" stroke="${"#9ca3af"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button></div>
					<div class="${escape("hidden", true) + " right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none fixed m-2"}" role="${"menu"}" aria-orientation="${"vertical"}" aria-labelledby="${"user-menu-button"}" tabindex="${"-1"}">${each(UserNavs, (un) => {
    return `${un.id !== void 0 ? `${validate_component(UserNav, "UserNav").$$render($$result, Object.assign(un), {}, {})}` : ``}`;
  })}</div></div></div></div></div>

	<div class="${"sm:hidden"}" id="${"mobile-menu"}"><div class="${escape("hidden", true) + " space-y-1 px-2 pt-2 pb-3"}">${each(links, (item) => {
    return `${validate_component(NavLink, "NavLink").$$render($$result, Object.assign(item, { type: "mobile" }), {}, {})}`;
  })}</div></div></nav>



${slots.default ? slots.default({}) : ``}


<div class="${"flex"}"></div>`;
});
export {
  Layout as default
};
