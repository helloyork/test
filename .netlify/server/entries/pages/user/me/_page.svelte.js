import { c as create_ssr_component, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  return `<h6>about me</h6>
<h5>${escape(JSON.stringify(user))}</h5>`;
});
export {
  Page as default
};
