import { _ as __nuxt_component_0$1 } from './nuxt-link-y0-cdhK_.mjs';
import { u as useHead, b as useState } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DarkToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const color = useColorMode();
    useHead({
      meta: [{
        id: "theme-color",
        name: "theme-color",
        content: () => color.value === "dark" ? "#222222" : "#ffffff"
      }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "!outline-none" }, _attrs))}><div class="i-carbon-sun dark:i-carbon-moon"></div></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DarkToggle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_DarkToggle = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    text: "xl gray4",
    "m-5": "",
    flex: "~ gap3",
    "justify-center": ""
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    "i-carbon-campsite": "",
    to: "/"
  }, null, _parent));
  _push(`<a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank"></a>`);
  _push(ssrRenderComponent(_component_DarkToggle, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Footer-l_7gqBYu.mjs.map
