parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YNnv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$isEmptyArticles=exports.$isFirstBoot=exports.$status=exports.$pageSize=exports.$totalPages=exports.$articles=exports.$feed=exports.$currentPage=exports.setUnfavoriteArticleFx=exports.setFavoriteArticleFx=exports.favoriteToggled=exports.currentPageSettled=exports.fetchFeedFx=exports.toggleFavorite=exports.PageGate=void 0;var e,t=require("effector"),r=require("effector-react"),o=require("patronum/status"),a=c(require("api")),s=c(require("features/feed")),i=require("library/limit");function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var n=(0,r.createGate)();exports.PageGate=n;var f=(0,t.createEvent)();exports.toggleFavorite=f;var u=(0,t.createEffect)(function(e){var t=e.pageSize,r=e.page;return a.get("/articles/feed?"+(0,i.limit)(t,r))});exports.fetchFeedFx=u;var l=(e=s.createFeedModel()).currentPageSettled,x=e.favoriteToggled,g=e.setFavoriteArticleFx,v=e.setUnfavoriteArticleFx,d=e.$currentPage,$=e.$feed,F=e.$articles,P=e.$totalPages,y=e.$pageSize;exports.$pageSize=y,exports.$totalPages=P,exports.$articles=F,exports.$feed=$,exports.$currentPage=d,exports.setUnfavoriteArticleFx=v,exports.setFavoriteArticleFx=g,exports.favoriteToggled=x,exports.currentPageSettled=l;var b=(0,o.status)({effect:u});exports.$status=b;var O=(0,t.createStore)(!0);exports.$isFirstBoot=O;var A=(0,t.combine)(b,F,function(e,t){return"done"===e&&0===t.length});exports.$isEmptyArticles=A;
},{"effector":"hr1S","effector-react":"wuaz","patronum/status":"lYeu","api":"in7L","features/feed":"emfq","library/limit":"nHV0"}],"oeOd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=r(require("./model"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var f=n?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}exports.model=e;
},{"./model":"YNnv"}],"CUh1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pagination=void 0;var e=i(require("react")),r=require("effector-react"),t=require("library/item-render"),a=require("ui"),o=require("../model");function i(e){return e&&e.__esModule?e:{default:e}}var n=function(i){var n=i.path,u=(0,r.useStore)(o.model.$totalPages),d=(0,r.useStore)(o.model.$currentPage),l=(0,r.useStore)(o.model.$pageSize);return e.default.createElement(a.Pagination,{current:d,itemRender:(0,t.itemRender)(n),pageSize:l,total:u,onChange:o.model.currentPageSettled})};exports.Pagination=n;
},{"react":"n8MK","effector-react":"wuaz","library/item-render":"PXBq","ui":"npgd","../model":"oeOd"}],"H38B":[function(require,module,exports) {
"use strict";var e=require("effector"),r=require("./model");r.$isFirstBoot.on(r.fetchFeedFx.done,function(){return!1}),r.$feed.on(r.fetchFeedFx.doneData,function(e,r){return r}),(0,e.forward)({from:[r.PageGate.open,r.$currentPage],to:(0,e.attach)({source:{pageSize:r.$pageSize,page:r.$currentPage},effect:r.fetchFeedFx})});
},{"effector":"hr1S","./model":"YNnv"}],"IwMJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.YourFeedPage=void 0;var e=n(require("react")),t=require("effector-react"),r=require("ui"),l=require("../model"),a=require("./pagination");function n(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var u=function(){return(u=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(n){var i=n.match.path;(0,t.useGate)(l.model.PageGate);var o=(0,t.useStore)(l.model.$isFirstBoot),c=(0,t.useStore)(l.model.$isEmptyArticles);return e.default.createElement(e.default.Fragment,null,c&&e.default.createElement(r.EmptyArticles,null),e.default.createElement(r.List,null,(0,t.useList)(l.model.$articles,function(t){return e.default.createElement("li",null,e.default.createElement(r.ArticlePreview,u({},t,{onClick:function(){return l.model.favoriteToggled(t)}})))})),e.default.createElement(a.Pagination,{path:i}),e.default.createElement(r.Spinner,{loading:o}))};exports.YourFeedPage=i;
},{"react":"n8MK","effector-react":"wuaz","ui":"npgd","../model":"oeOd","./pagination":"CUh1","../model/init":"H38B"}],"aR54":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"YourFeedPage",{enumerable:!0,get:function(){return e.YourFeedPage}});var e=require("./ui/your-feed");
},{"./ui/your-feed":"IwMJ"}]},{},[], null)
//# sourceMappingURL=/effector-react-realworld-example-app/your-feed.680f42a5.js.map