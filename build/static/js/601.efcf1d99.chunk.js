/*! For license information please see 601.efcf1d99.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkRecruitment=self.webpackChunkRecruitment||[]).push([[601],{9896:function(t,e,n){var r=n(9439),o=n(2791),i=n(9434),a=n(8617),s=n(1087),c=n(6856),l=n(8820),u=n(7060),d=n(184);e.Z=function(t){var e=(0,o.useState)(!0),n=(0,r.Z)(e,2),h=n[0],f=n[1],p=(0,o.useState)(!1),m=(0,r.Z)(p,2),v=m[0],x=m[1],g=(0,i.I0)(),y=(0,i.v9)((function(t){return t.user}));(0,o.useEffect)((function(){var t=function(){window.innerWidth>=768?f(!0):f(!1)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]);var w=[{name:"Dashboard",link:"/home",icon:c.JZ9},{name:"Input",link:"/input/datadiri",icon:l.lFz,isAccordion:!1,isAccordionOpen:v,onAccordionToggle:function(){x(!v)},accordionContent:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:"ml-2 py-4 whitespace-pre transform-gpu transition-transform duration-300 active:scale-90".concat(h?"":"opacity-0 translate-x-28 overflow-hidden"),children:(0,d.jsx)(s.OL,{to:"/input/datadiri",children:"- Data Diri"})}),(0,d.jsx)("li",{className:"ml-2 py-4 whitespace-pre transform-gpu transition-transform duration-300 active:scale-90".concat(h?"":"opacity-0 translate-x-28 overflow-hidden"),children:(0,d.jsx)(s.OL,{to:"/input/pendidikan",children:"- Pendidikan"})}),(0,d.jsx)("li",{className:"ml-2 py-4 whitespace-pre transform-gpu transition-transform duration-300 active:scale-90".concat(h?"":"opacity-0 translate-x-28 overflow-hidden"),children:(0,d.jsx)(s.OL,{to:"/input/pengalaman",children:"- Pengalaman Kerja"})})]})},{name:"Result",link:"/result",icon:a.xOf},{name:"Logout",link:"/",icon:a.cKt}];return(0,d.jsxs)("section",{className:"flex bg-[#89CFF0] ".concat(h?"flex-1":"flex-initial"),children:[(0,d.jsxs)("div",{className:"bg-[#cdcdcd] min-h-screen ".concat(h?"w-72":"w-16"," duration-500 font-Poppins text-dark px-4"),children:[(0,d.jsx)("div",{className:"py-3 flex justify-end",children:(0,d.jsx)(a.Cq1,{size:26,className:"cursor-pointer",onClick:function(){f(!h),!1===h&&x(!1)}})}),(0,d.jsxs)("div",{className:"mt-4 flex flex-col gap-4 relative",children:[(0,d.jsx)("div",{className:"text-2xl font-bold mb-2 text-dark duration-500 ".concat(h?"":"opacity-0 translate-x-28 overflow-hidden"),children:(0,d.jsx)("img",{src:"/assets/logo.svg",alt:"Logo"})}),(0,d.jsx)("span",{className:"text-xl font-bold mb-2 text-dark duration-500 ".concat(h?"":"opacity-0 translate-x-28 overflow-hidden"),children:"Hello, ".concat(y.nama.split(" ").slice(0,2).join(" "))}),null===w||void 0===w?void 0:w.map((function(t,e){return t.isAccordion?(0,d.jsxs)(o.Fragment,{children:[(0,d.jsxs)("div",{className:"flex items-center text-sm gap-3.5 font-medium cursor-pointer hover:bg-sky-500 rounded-md p-2 transform-gpu transition-transform duration-300 active:scale-90",onClick:t.onAccordionToggle,children:[(0,d.jsx)("div",{children:o.createElement(t.icon,{size:"20"})}),(0,d.jsx)("h2",{style:{transitionDelay:"".concat(e+3,"00ms")},className:"whitespace-pre duration-500 ".concat(h?"":"opacity-0 translate-x-28 overflow-hidden"),children:t.name})]}),t.isAccordionOpen&&(0,d.jsx)("div",{className:"ml-6",children:t.accordionContent})]},e):(0,d.jsxs)(s.OL,{to:t.link,className:"flex items-center text-sm gap-3.5 font-medium hover:bg-sky-500 rounded-md p-2 transform-gpu transition-transform duration-300 active:scale-90 ".concat("Logout"===t.name?"mt-14":""),onClick:function(){"Logout"===t.name&&g((0,u.kS)({user:"",nama:""}))},children:[(0,d.jsx)("div",{children:o.createElement(t.icon,{size:"20"})}),(0,d.jsx)("h2",{style:{transitionDelay:"".concat(e+3,"00ms")},className:"whitespace-pre duration-500 ".concat(h?"":"opacity-0 translate-x-28 overflow-hidden"),children:t.name})]},e)}))]})]}),(0,d.jsx)("div",{className:"mx-3 mt-10  whitespace-pre  w-full p-5 ",children:t.content})]})}},3601:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(9439),o=n(2791),i=n(9896),a=n(4165),s=n(5861),c=n(7689),l=n(8617),u=n(184),d=function(t){var e=(0,c.s0)(),n=(0,o.useState)([]),i=(0,r.Z)(n,2),d=i[0],h=i[1],f=(0,o.useState)(1),p=(0,r.Z)(f,2),m=p[0],v=p[1],x=(0,o.useState)(0),g=(0,r.Z)(x,2),y=g[0],w=g[1],j=(0,o.useState)(!1),b=(0,r.Z)(j,2),N=b[0],k=b[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(n=t.data)){e.next=13;break}return e.next=5,fetch("https://rekrutserver.stheven.website/show?status=".concat(n,"&p=").concat(m));case 5:if((r=e.sent).ok){e.next=8;break}throw new Error("Gagal Melakukan Fetch Data");case 8:return e.next=10,r.json();case 10:o=e.sent,h(o[0]),w(o[1]);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[m,t.data]),(0,u.jsxs)("div",{className:"font-Poppins",children:[(0,u.jsx)("h1",{className:"text-xl text-gray-900 font-semibold",children:t.judul}),(0,u.jsxs)("div",{className:"w-full p-5",children:[(0,u.jsxs)("div",{className:"flex items-center mt-4 mb-2 gap-3",children:[(0,u.jsx)("div",{onClick:function(){return k(!N)},className:"bg-gray-300 cursor-pointer rounded-full duration-300 transition-colors h-5 w-10 ".concat(N?"bg-green-500":""),children:(0,u.jsx)("div",{className:"bg-white h-5 w-5 rounded-full ".concat(N?"translate-x-5":""," duration-300 transition-all ")})}),(0,u.jsx)("span",{className:"font-Poppins",children:"Table View"})]}),N?(0,u.jsxs)("table",{className:"table-auto w-full border-collapse rounded-xl overflow-x-auto",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:"px-4 py-2 text-left",children:"Name"}),(0,u.jsx)("th",{className:"px-4 py-2 text-left",children:"Position"}),(0,u.jsx)("th",{className:"px-4 py-2 text-left",children:"Added Date"}),(0,u.jsx)("th",{className:"px-4 py-2 text-left",children:"Location"}),(0,u.jsx)("th",{className:"px-4 py-2 text-left",children:"Action"})]})}),(0,u.jsx)("tbody",{children:d.length>0&&d.map((function(n,r){return(0,u.jsxs)("tr",{className:"bg-white transition-colors duration-300 ".concat(r%2===0?"bg-gray-100":""),children:[(0,u.jsx)("td",{className:"px-4 py-2",children:n.nama}),(0,u.jsx)("td",{className:"px-4 py-2",children:n.posisi}),(0,u.jsx)("td",{className:"px-4 py-2",children:n.addedDate}),(0,u.jsx)("td",{className:"px-4 py-2",children:n.lokasi}),(0,u.jsx)("td",{className:"px-4 py-2 cursor-pointer active:scale-90 duration-300 transfrom-gpu transition-transform",onClick:function(){return e("/result/".concat(t.to,"/").concat(n._id))},children:(0,u.jsx)(l.LsQ,{size:25})})]},r)}))})]}):(0,u.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:d.length>0&&d.map((function(n){var r="";return n.status.includes("New")?r="orange":n.status.includes("Interview HC")||n.status.includes("Psychological Test")||n.status.includes("Interview User")||n.status.includes("Offering")||n.status.includes("Medical Check Up")?r="blue":n.status.includes("Rejected")?r="red":n.status.includes("Accepted")?r="green":n.status.includes("Consideration")&&(r="yellow"),(0,u.jsxs)("div",{className:"grid grid-cols-2 bg-white h-32 p-4 text-sm w-full rounded-md gap-2 shadow-xl transform-gpu transition-transform duration-300 active:scale-90 cursor-pointer",style:{borderTop:"3px solid ".concat(r)},onClick:function(){return e("/result/".concat(t.to,"/").concat(n._id))},children:[(0,u.jsx)("span",{className:"text-start",children:n.nama}),(0,u.jsx)("span",{className:"text-end",children:n.posisi}),(0,u.jsx)("span",{className:"text-start",children:n.addedDate}),(0,u.jsx)("span",{className:"text-end",children:n.lokasi})]},n._id)}))}),(0,u.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,u.jsx)("button",{className:"bg-yellow-500 h-12 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-600 disabled:bg-gray-400 disabled:pointer-events-none",disabled:1===m,onClick:function(){v(1===m?1:m-1)},children:"Back"}),(0,u.jsx)("button",{className:"bg-sky-500 h-12 px-4 rounded-lg transition-colors duration-300 hover:bg-sky-600 disabled:bg-gray-400 disabled:pointer-events-none",disabled:m===y,onClick:function(){v(m===y?y:m+1)},children:"Next"})]})]})]})},h=function(){var t=o.useState(""),e=(0,r.Z)(t,2),n=e[0],a=e[1],s=(0,c.UO)().where;return(0,o.useEffect)((function(){"interview"===s&&a("Interview HC"),"pystest"===s&&a("Psychological Test"),"interviewuser"===s&&a("Interview User"),"offering"===s&&a("Offering"),"mcu"===s&&a("Medical Check Up")}),[s,n]),(0,u.jsx)(i.Z,{content:(0,u.jsx)(d,{judul:n,data:n,to:s})})}},5861:function(t,e,n){function r(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)}))}}n.d(e,{Z:function(){return o}})},4165:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(1002);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),s=new O(r||[]);return i(a,"_invoke",{value:N(t,n,s)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=d;var f={};function p(){}function m(){}function v(){}var x={};u(x,s,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(C([])));y&&y!==e&&n.call(y,s)&&(x=y);var w=v.prototype=p.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,s,c){var l=h(t[i],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==(0,r.Z)(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function N(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(b.prototype),u(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(d(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),u(w,l,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=601.efcf1d99.chunk.js.map