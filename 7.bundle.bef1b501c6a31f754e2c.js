(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VT8v:function(t,e,n){"use strict";n.r(e);var o=n("dY8W"),c=n("rEH3"),r=n("UYjC"),i=n("SugE"),u=n("lyZd"),a=n("eZyy"),f=n("YzYS"),l=Object(i.c)((function(t){var e=t.pageSize,n=t.page;return a.a.get("articles/feed?".concat(Object(f.a)(e,n))).then((function(t){return t.data}))})),s=c.e({status:Object(u.status)({effect:l})}),d=s.Gate,g=s.currentPageWasSet,b=s.favoriteToggled,p=s.$currentPage,j=s.$feed,y=s.$articles,S=s.$pageSize,m=s.useModel;j.on(l.doneData,(function(t,e){return e})),Object(i.j)({source:{pageSize:S,page:p},clock:[d.open,g],target:l});var O=n("oYCi");e.default=function(){Object(o.b)(d);var t=Object(o.d)(l.pending),e=m(),n=e.totalPages,i=e.currentPage,u=e.pageSize,a=e.isEmptyFeed;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(c.d,{show:a}),Object(O.jsx)(c.c,{children:Object(o.c)(y,{getKey:function(t){return t.slug},fn:function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(c.b,{data:t,onClick:function(){return b(t)}})})}})}),Object(O.jsx)(r.m,{current:i,pageSize:u,total:n,onItemClick:g}),Object(O.jsx)(r.o,{loading:t})]})}},YzYS:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t,e){return"limit=".concat(t,"&offset=").concat(e*t)}},lyZd:function(t,e,n){var o=n("YSF1").createStore,c=n("q0Di").readConfig;t.exports={status:function(t){var e=c(t,["sid","name","loc","effect","defaultValue"]),n=e.sid,r=e.name,i=e.loc,u=e.effect,a=e.defaultValue,f=o(void 0===a?"initial":a,{sid:n,loc:i,name:r});return f.on(u,(function(){return"pending"})).on(u.done,(function(){return"done"})).on(u.fail,(function(){return"fail"})),f}}},q0Di:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n){n.filter((function(e){return void 0!==t[e]})).forEach((function(n){e[n]=t[n]}))}t.exports={readConfig:function t(e,c){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return"object"!==n(e)||null===e||(e.config&&t(e.config,c,r),o(e,r,c),e.ɔ&&t(e.ɔ,c,r)),r}}}}]);