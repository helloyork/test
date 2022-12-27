import { c as create_ssr_component, e as escape } from "./index.js";
const Tip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { display = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  return `<h6 class="${escape(display ? "block" : "hidden", true) + " text-rose-700 text-xs inline-block"}">${escape(text)}</h6>`;
});
export {
  Tip as T
};
