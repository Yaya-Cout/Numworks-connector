(function(){var n={3482:function(n,e,t){"use strict";t.r(e),e["default"]={message:n=>{const{normalize:e}=n;return e(["hello i18n !!"])}}},5834:function(n,e,t){"use strict";var o=t(9242),r=t(3396);function u(n,e,t,o,u,i){const a=(0,r.up)("NavbarComponent"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(a),(0,r.Wm)(c)])}var i=t(5658);const a=(0,r.Uk)("Home"),c=(0,r.Uk)(" | "),f=(0,r.Uk)("About");function s(n,e,t,o,u,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[a])),_:1}),c,(0,r.Wm)(s,{to:"/about"},{default:(0,r.w5)((()=>[f])),_:1})])}var l=(0,r.aZ)({name:"NavbarComponent",setup(){const{t:n}=(0,i.QT)({inheritLocale:!0,useScope:"global"});return{t:n}}}),d=t(89);const p=(0,d.Z)(l,[["render",s]]);var v=p,m=(0,r.aZ)({name:"App",components:{NavbarComponent:v},setup(){const{t:n}=(0,i.QT)({inheritLocale:!0,useScope:"global"});return{t:n}}});const b=(0,d.Z)(m,[["render",u]]);var h=b,g=t(2483);const w={class:"home"},y=(0,r._)("h1",null,"Numworks Connector",-1),k=[y];function O(n,e,t,o,u,i){return(0,r.wg)(),(0,r.iD)("div",w,k)}var j=(0,r.aZ)({name:"HomeView",setup(){const{t:n}=(0,i.QT)({inheritLocale:!0,useScope:"global"});return{t:n}}});const _=(0,d.Z)(j,[["render",O]]);var C=_;const T=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,6309))}],E=(0,g.p7)({history:(0,g.r5)(),routes:T});var N=E;function S(){const n=t(8973),e={};return n.keys().forEach((t=>{const o=t.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){const r=o[1];e[r]=n(t).default}})),e}var A=(0,i.o)({legacy:!1,locale:"en",fallbackLocale:"en",messages:S()});(0,o.ri)(h).use(A).use(N).use(N).mount("#app")},8973:function(n,e,t){var o={"./en.json":3482};function r(n){var e=u(n);return t(e)}function u(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}r.keys=function(){return Object.keys(o)},r.resolve=u,n.exports=r,r.id=8973}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var u=e[o]={exports:{}};return n[o](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,u){if(!o){var i=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],u=n[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var f=r();void 0!==f&&(e=f)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[o,r,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.20a28d11.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="numworks-connector:";t.l=function(o,r,u,i){if(n[o])n[o].push(r);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==e+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+u),a.src=o),n[o]=[r];var d=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=u);var i=t.p+t.u(e),a=new Error,c=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,u,i=o[0],a=o[1],c=o[2],f=0;if(i.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var s=c(t)}for(e&&e(o);f<i.length;f++)u=i[f],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},o=self["webpackChunknumworks_connector"]=self["webpackChunknumworks_connector"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(5834)}));o=t.O(o)})();
//# sourceMappingURL=app.fb9bac71.js.map