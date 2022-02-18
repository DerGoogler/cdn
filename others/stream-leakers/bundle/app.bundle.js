(()=>{"use strict";var e,t={531:(e,t,n)=>{var o=n(294),r=n(60),i=n(57),a=n(669),c=n.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=y(t);if(n){var r=y(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return s(this,e)});function a(){var e;l(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return m(p(e=r.call.apply(r,[this].concat(n))),"renderToolbar",(function(){var t=e.props,n=t.title,r=t.popPage;return o.createElement(i.Toolbar,null,o.createElement("div",{className:"left"},o.createElement(i.BackButton,{onClick:r})),o.createElement("div",{className:"center"},n))})),m(p(e),"render",(function(){var t=e.props.src;return o.createElement(i.Page,{renderToolbar:e.renderToolbar},o.createElement("video",{controls:!0,width:"100%",height:"100%"},o.createElement("source",{src:t,type:"video/mp4"})))})),e}return a}(o.Component);var h=n(180);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=O(t);if(n){var r=O(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return P(this,e)});function a(){var e;v(this,a);for(var t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return E(w(e=r.call.apply(r,[this].concat(n))),"state",{config:{},video:[]}),E(w(e),"get",(function(e,t){c().get("/assets/stream-leakers/".concat(e)).then((function(e){var n=e.data,o=h.ZP.load(n,{json:!0});"function"==typeof t&&t(o)}))})),E(w(e),"componentDidMount",(function(){e.get("video.yaml",(function(t){e.setState({video:t})})),e.get("config.yaml",(function(t){e.setState({config:t})}))})),E(w(e),"renderToolbar",(function(){return o.createElement(i.Toolbar,null,o.createElement("div",{className:"center"},"Stream Leakers"))})),E(w(e),"render",(function(){var t=e.state,n=t.video,r=t.config,a=e.props.pushPage;return o.createElement(i.Page,{renderToolbar:e.renderToolbar},o.createElement("div",null,o.createElement("div",null,o.createElement(i.SearchInput,{style:{width:"100%"},placeholder:"Suchen",onChange:function(e){var t,n,o,r;for(t=e.target.value.toUpperCase(),n=document.getElementById("sl").getElementsByTagName("ons-list-item"),r=0;r<n.length;r++)((o=n[r].getElementsByTagName("span")[0]).textContent||o.innerText).toUpperCase().indexOf(t)>-1?n[r].style.display="":n[r].style.display="none"}})),o.createElement("div",{id:"sl"},o.createElement(i.List,null,n.map((function(e){return o.createElement(o.Fragment,null,o.createElement(i.ListItem,{expandable:!0,modifier:"nodivider"},o.createElement("span",null,e.title),o.createElement("div",{className:"expandable-content"},o.createElement(i.Button,{style:{marginTop:"4px",marginBottom:"4px"},modifier:"large",onClick:function(){window.open(r.baseURL+e.link)},disabled:!0},"Download Video"),o.createElement(i.Button,{style:{marginTop:"4px",marginBottom:"4px"},modifier:"large",onClick:function(){a({component:b,key:"player",src:r.baseURL+e.link,title:e.title})}},"Play Video"))))}))))))})),e}return a}(o.Component);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(u,e);var t,n,r,a,c=(r=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(a){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),N(T(t=c.call(this,e)),"componentDidMount",(function(){window.addEventListener("load",t.windowLoadPush)})),N(T(t),"componentWillUnmount",(function(){window.removeEventListener("load",t.windowLoadPush)})),N(T(t),"windowLoadPush",(function(){if("function"==typeof history.pushState)history.pushState("jibberish",null,null),window.onpopstate=function(){history.pushState("newjibberish",null,null),"main"===t.state.currentPage?window.close():t.popPage()};else{var e=!0;window.onhashchange=function(){e?e=!1:(e=!0,window.location.hash=Math.random())}}}));var n=i.RouterUtil.init([{component:j,props:{key:"main",pushPage:function(){var e;return(e=t).pushPage.apply(e,arguments)}}}]);return t.state={routeConfig:n,currentPage:"main"},t}return t=u,(n=[{key:"pushPage",value:function(e){var t=this,n={component:e.component,props:{key:e.key,extras:e.extras,src:e.src,title:e.title,popPage:function(){return t.popPage()},pushPage:function(){return t.pushPage.apply(t,arguments)}}},o=this.state.routeConfig;o=i.RouterUtil.push({routeConfig:o,route:n}),this.setState({routeConfig:o}),this.setState({currentPage:e.key})}},{key:"popPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.state.routeConfig;t=i.RouterUtil.pop({routeConfig:t,options:_(_({},e),{},{animationOptions:{duration:.2,timing:"ease-in",animation:"fade-md"}})}),this.setState({routeConfig:t}),this.setState({currentPage:"main"})}},{key:"onPostPush",value:function(){var e=i.RouterUtil.postPush(this.state.routeConfig);this.setState({routeConfig:e})}},{key:"onPostPop",value:function(){var e=i.RouterUtil.postPop(this.state.routeConfig);this.setState({routeConfig:e})}},{key:"renderPage",value:function(e){var t=e.props||{};return o.createElement(e.component,t)}},{key:"renderToolbar",value:function(){return o.createElement(i.Toolbar,null,o.createElement("div",{className:"left"},o.createElement(i.BackButton,null)),o.createElement("div",{className:"center"},"Stateless Navigator"))}},{key:"render",value:function(){var e=this;return o.createElement(i.Page,null,o.createElement(i.RouterNavigator,{swipeable:!0,swipePop:function(t){return e.popPage(t)},routeConfig:this.state.routeConfig,renderPage:this.renderPage,onPostPush:function(){return e.onPostPush()},onPostPop:function(){return e.onPostPop()}}))}}])&&C(t.prototype,n),u}(o.Component);function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(new(function(){function e(){var t,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n="mountNode",o=document.querySelector("app"),n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,console.log("App wird gestartet!")}var t,n;return t=e,(n=[{key:"loadActivity",value:function(){r.render(o.createElement(L,null),this.mountNode)}},{key:"init",value:function(){this.loadActivity()}}])&&U(t.prototype,n),e}())).init()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,r,i]=e[l],c=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[u])))?n.splice(u--,1):(c=!1,i<a&&(a=i));c&&(e.splice(l--,1),t=r())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,c,u]=n,l=0;for(r in c)o.o(c,r)&&(o.m[r]=c[r]);for(u&&u(o),t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;o.O()},n=self.webpackChunkreact_hot_experimental=self.webpackChunkreact_hot_experimental||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[736],(()=>o(531)));r=o.O(r)})();