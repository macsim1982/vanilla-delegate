function T(e){return!!(e&&typeof e=="function")}function d(e){return typeof e=="string"}function p(e){return!!(typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string")}function F(e,o,r,i,g=!1,l=!1){if(!p(e)||!d(o)||!d(r)||!T(i)){console.error("Delegate Event","invalid parameter",e,o,r,i);return}function u(t,n,a,E,m){n.split(",").forEach(v=>{t[`${m?"remove":"add"}EventListener`](v.trim(),a,E)})}function f(t){let n=t.target,a=t.currentTarget,E=n.matches(o)?t.target:n.closest(o);n&&a.contains(n)&&(t.delegateTarget=n,i.call(e,t),t.once=l,l&&s())}function c(){u(e,r,f,g,!1)}function s(){u(e,r,f,g,!0)}return c(),{delegate:c,undelegate:s}}export{F as delegate};
//# sourceMappingURL=index.js.map
