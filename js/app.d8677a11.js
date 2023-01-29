(function(){var e={3482:function(e,n,o){"use strict";o.r(n),n["default"]={home:{title:e=>{const{normalize:n}=e;return n(["Upsilon File Exchanger for NumWorks"])},connect:e=>{const{normalize:n}=e;return n(["Connect"])},disconnect:e=>{const{normalize:n}=e;return n(["Disconnect"])},delete:e=>{const{normalize:n}=e;return n(["Delete"])},rename:e=>{const{normalize:n}=e;return n(["Rename"])},"rename-prompt":e=>{const{normalize:n}=e;return n(["Enter new name:"])},download:e=>{const{normalize:n}=e;return n(["Download"])},"download-all":e=>{const{normalize:n}=e;return n(["Download all"])},records:e=>{const{normalize:n}=e;return n(["Files"])},upload:e=>{const{normalize:n}=e;return n(["Upload"])}},about:{title:e=>{const{normalize:n}=e;return n(["About"])},description:e=>{const{normalize:n}=e;return n(["Upsilon File Exchanger for NumWorks is a web application that allows you to manage your Numworks from your browser."])},github:e=>{const{normalize:n}=e;return n(["GitHub"])}},error:{error:e=>{const{normalize:n}=e;return n(["Error :"])},unknown:e=>{const{normalize:n}=e;return n(["An unknown error has occurred."])},"no-usb":e=>{const{normalize:n}=e;return n(["Your browser does not support WebUSB, please use a Chromium-based browser instead."])}}}},5627:function(e,n,o){"use strict";o.r(n),n["default"]={home:{connect:e=>{const{normalize:n}=e;return n(["Connecter"])},delete:e=>{const{normalize:n}=e;return n(["Supprimer"])},disconnect:e=>{const{normalize:n}=e;return n(["Déconnecter"])},title:e=>{const{normalize:n}=e;return n(["Upsilon File Exchanger for NumWorks"])},rename:e=>{const{normalize:n}=e;return n(["Renommer"])},"rename-prompt":e=>{const{normalize:n}=e;return n(["Entrez le nouveau nom :"])},download:e=>{const{normalize:n}=e;return n(["Télécharger"])},"download-all":e=>{const{normalize:n}=e;return n(["Tout télécharger"])},records:e=>{const{normalize:n}=e;return n(["Fichiers"])},upload:e=>{const{normalize:n}=e;return n(["Envoyer"])}},about:{github:e=>{const{normalize:n}=e;return n(["GitHub"])},description:e=>{const{normalize:n}=e;return n(["Upsilon File Exchanger for NumWorks est une application web qui permet de gérer votre Numworks depuis votre navigateur Web"])},title:e=>{const{normalize:n}=e;return n(["À propos"])}},error:{error:e=>{const{normalize:n}=e;return n(["Erreur : "])},unknown:e=>{const{normalize:n}=e;return n(["Une erreur inconnue est survenue"])},"no-usb":e=>{const{normalize:n}=e;return n(["Votre navigateur ne supporte pas le WebUSB, veuillez utiliser un navigateur basé sur Chromium à la place."])}}}},8805:function(e,n,o){"use strict";var t=o(9242),r=o(3396);function c(e,n,o,t,c,a){const s=(0,r.up)("NavbarComponent"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r.Wm)(i)])}var a=o(5658);function s(e,n,o,t,c,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(s,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})])}var i=(0,r.aZ)({name:"NavbarComponent",setup(){const{t:e}=(0,a.QT)({inheritLocale:!0,useScope:"global"});return{t:e}}}),l=o(89);const u=(0,l.Z)(i,[["render",s]]);var d=u,m=(0,r.aZ)({name:"App",components:{NavbarComponent:d},setup(){const{t:e}=(0,a.QT)({inheritLocale:!0,useScope:"global"});return{t:e}}});const p=(0,l.Z)(m,[["render",c]]);var h=p,f=o(2483),w=o(7139);const g={class:"home"},b={key:0,class:"error"},v={key:5},y=["onClick"],k=["onClick"],z=["onClick"];function S(e,n,o,t,c,a){return(0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("h1",null,(0,w.zw)(e.t("home.title")),1),e.error?((0,r.wg)(),(0,r.iD)("div",b,(0,w.zw)(e.t("error.error")+e.t("error."+e.error)),1)):(0,r.kq)("",!0),e.connected?((0,r.wg)(),(0,r.iD)("button",{key:2,onClick:n[1]||(n[1]=(...n)=>e.disconnect&&e.disconnect(...n))},(0,w.zw)(e.t("home.disconnect")),1)):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:n[0]||(n[0]=(...n)=>e.connect&&e.connect(...n))},(0,w.zw)(e.t("home.connect")),1)),e.connected?((0,r.wg)(),(0,r.iD)("button",{key:3,onClick:n[2]||(n[2]=n=>e.downloadAll())},(0,w.zw)(e.$t("home.download-all")),1)):(0,r.kq)("",!0),e.connected?((0,r.wg)(),(0,r.iD)("button",{key:4,onClick:n[3]||(n[3]=n=>e.upload())},(0,w.zw)(e.$t("home.upload")),1)):(0,r.kq)("",!0),e.connected?((0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("h2",null,(0,w.zw)(e.$t("home.records")),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.storage["records"],((n,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o,class:"recordList"},[(0,r._)("span",null,(0,w.zw)(n.name+"."+n.type),1),(0,r._)("button",{onClick:n=>e.renameRecord(o)},(0,w.zw)(e.$t("home.rename")),9,y),(0,r._)("button",{onClick:n=>e.downloadRecord(o)},(0,w.zw)(e.$t("home.download")),9,k),(0,r._)("button",{onClick:n=>e.deleteRecord(o)},(0,w.zw)(e.$t("home.delete")),9,z)])))),128))])):(0,r.kq)("",!0)])}o(7658);var C=o(4756),D=o.n(C),_=o(4730),O=o.n(_),U=(0,r.aZ)({name:"HomeView",setup(){const{t:e}=(0,a.QT)({inheritLocale:!0,useScope:"global"});return{t:e}},data(){return{calculator:new(D()),connected:!1,storage:{},hasUSB:null!=navigator.usb,error:""}},mounted(){if(!this.hasUSB)return void this.errorHandler("no-usb");this.calculator.autoConnect(this.connectedHandler);const e=this;navigator.usb.addEventListener("disconnect",(function(n){e.calculator.onUnexpectedDisconnect(n,e.unexpectedDisconnectHandler)}))},methods:{connect(){this.calculator.detect(this.connectedHandler,this.errorHandler)},disconnect(e){e.preventDefault(),this.calculator.device.device_.close(),this.calculator.stopAutoConnect(),this.disconnectedHandler()},async connectedHandler(){console.log("connected"),this.connected=!0,await this.saveStorage()},disconnectedHandler(){console.log("disconnected"),this.connected=!1},unexpectedDisconnectHandler(){console.log("unexpected disconnect"),this.calculator.autoConnect(this.connectedHandler),this.disconnectedHandler()},errorHandler(e){console.error(e),this.error=e},async saveStorage(){this.storage=await this.calculator.backupStorage((function(e){this.storage=e}),this.errorHandler),console.log(this.storage)},async deleteRecord(e){this.storage.records.splice(e,1),await this.calculator.installStorage(this.storage,(function(){})),console.log("Success"),await this.saveStorage()},async renameRecord(e){const n=this.storage.records[e],o=prompt(this.t("home.rename-prompt"),n.name);o&&(n.name=o,await this.calculator.installStorage(this.storage,(function(){})),console.log("Success"),await this.saveStorage())},async downloadRecord(e){const n=this.storage.records[e],o=new Blob([n.code],{type:"application/octet-stream"}),t=document.createElement("a");t.href=window.URL.createObjectURL(o),t.download=n.name+"."+n.type,t.click()},async downloadAll(){const e=new(O());for(const t of this.storage.records)e.file(t.name+"."+t.type,t.code);const n=await e.generateAsync({type:"blob"}),o=document.createElement("a");o.href=window.URL.createObjectURL(n),o.download="backup.zip",o.click()},async upload(){const e=document.createElement("input");e.type="file",e.onchange=e=>{for(const n of e.target.files)n.name.endsWith(".zip")?this.uploadZip(n):this.uploadFile(n)},e.click()},async uploadFile(e){const n=new FileReader;n.readAsText(e),n.addEventListener("load",(async()=>{let o=n.result;const t=e.name.replace(/\.[^/.]+$/,""),r=e.name.split(".").pop();this.storage.records.push({name:t,type:r,code:o}),await this.calculator.installStorage(this.storage,(function(){})),console.log("Success"),this.saveStorage()}))},async uploadZip(e){const n=new FileReader;n.readAsArrayBuffer(e),n.addEventListener("load",(async()=>{const e=await O().loadAsync(n.result);for(const[n,o]of Object.entries(e.files)){const e=await o.async("string"),t=n.split(".").pop(),r=n.replace(/\.[^/.]+$/,"");this.storage.records.push({name:r,type:t,code:e}),console.log(this.storage),console.log(r,t,e)}await this.calculator.installStorage(this.storage,(function(){})),console.log("Success"),this.saveStorage()}))}}});const E=(0,l.Z)(U,[["render",S]]);var H=E;const j={class:"about"},x={href:"https://github.com/Yaya-Cout/Numworks-connector"};function A(e,n,o,t,c,a){return(0,r.wg)(),(0,r.iD)("div",j,[(0,r._)("h1",null,(0,w.zw)(e.t("about.title")),1),(0,r._)("p",null,(0,w.zw)(e.t("about.description")),1),(0,r._)("a",x,(0,w.zw)(e.t("about.github")),1)])}var L=(0,r.aZ)({name:"AboutView",setup(){const{t:e}=(0,a.QT)({inheritLocale:!0,useScope:"global"});return{t:e}}});const R=(0,l.Z)(L,[["render",A]]);var F=R;const N=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:F}],T=(0,f.p7)({history:(0,f.r5)(),routes:N});var W=T;function Z(){const e=o(8973),n={};return e.keys().forEach((o=>{const t=o.match(/([A-Za-z0-9-_]+)\./i);if(t&&t.length>1){const r=t[1];n[r]=e(o).default}})),n}var $=(0,a.o)({legacy:!1,locale:"fr",fallbackLocale:"en",messages:Z()});(0,t.ri)(h).use($).use(W).use(W).mount("#app")},8973:function(e,n,o){var t={"./en.json":3482,"./fr.json":5627};function r(e){var n=c(e);return o(n)}function c(e){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=c,e.exports=r,r.id=8973}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var c=n[t]={exports:{}};return e[t](c,c.exports,o),c.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,c){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],c=e[u][2];for(var s=!0,i=0;i<t.length;i++)(!1&c||a>=c)&&Object.keys(o.O).every((function(e){return o.O[e](t[i])}))?t.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[t,r,c]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,c,a=t[0],s=t[1],i=t[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var u=i(o)}for(n&&n(t);l<a.length;l++)c=a[l],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(u)},t=self["webpackChunknumworks_connector"]=self["webpackChunknumworks_connector"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(8805)}));t=o.O(t)})();
//# sourceMappingURL=app.d8677a11.js.map