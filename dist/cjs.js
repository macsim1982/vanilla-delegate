var l=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var H=Object.prototype.hasOwnProperty;var L=(e,t)=>{for(var n in t)l(e,n,{get:t[n],enumerable:!0})},b=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of F(t))!H.call(e,o)&&o!==n&&l(e,o,{get:()=>t[o],enumerable:!(a=p(t,o))||a.enumerable});return e};var M=e=>b(l({},"__esModule",{value:!0}),e);var S={};L(S,{delegate:()=>D});module.exports=M(S);function h(e){return!!(e&&typeof e=="function")}function m(e){return typeof e=="string"}function y(e){return!!(typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string")}function D(e,t,n,a,o=!1,u=!1){if(!y(e)||!m(t)||!m(n)||!h(a)){console.error("Delegate Event","invalid parameter",e,t,n,a);return}function f(r,i,g,d,v){i.split(",").forEach(T=>{r[`${v?"remove":"add"}EventListener`](T.trim(),g,d)})}function c(r){let i=r.target,g=r.currentTarget,d=i.matches(t)?r.target:i.closest(t);i&&g.contains(i)&&(r.delegateTarget=i,a.call(e,r),r.once=u,u&&E())}function s(){f(e,n,c,o,!1)}function E(){f(e,n,c,o,!0)}return s(),{delegate:s,undelegate:E}}
//# sourceMappingURL=cjs.js.map
