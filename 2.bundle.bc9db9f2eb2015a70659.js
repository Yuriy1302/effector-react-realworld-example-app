(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{YzYS:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){return"limit=".concat(e,"&offset=").concat(t*e)}},gr6A:function(e,t,n){"use strict";n.r(t);var r=n("dY8W"),c=n("rEH3"),a=n("UYjC"),i=n("SugE"),o=n("lyZd"),u=n("eZyy"),s=n("YzYS"),l=n("3OV0"),f=Object(i.c)((function(e){var t=e.username,n=e.page,r=e.pageSize;return u.a.get("articles?favorited=".concat(encodeURIComponent(t),"&").concat(Object(s.a)(r,n))).then((function(e){return e.data}))})),d=c.e({pageSize:5,status:Object(o.status)({effect:f})}),j=d.Gate,b=d.currentPageWasSet,p=d.favoriteToggled,g=d.$currentPage,O=d.$articles,v=(d.$totalPages,d.$feed),h=d.$pageSize,m=d.setUnfavoriteArticleFx,y=d.useModel;v.on(f.doneData,(function(e,t){return t})),Object(i.f)({from:[j.open,b,m.done],to:Object(i.a)({source:{pageSize:h,username:l.e,page:g},effect:f})});var x=n("oYCi");t.default=function(){Object(r.b)(j);var e=Object(r.d)(f.pending),t=y(),n=t.totalPages,i=t.currentPage,o=t.pageSize,u=t.isEmptyFeed;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(c.d,{show:u}),Object(x.jsx)(c.c,{children:Object(r.c)(O,{getKey:function(e){return e.slug},fn:function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(c.b,{data:e,onClick:function(){return p(e)}})})}})}),Object(x.jsx)(a.m,{current:i,pageSize:o,total:n,onItemClick:b}),Object(x.jsx)(a.o,{loading:e})]})}},kI28:function(e,t){},lyZd:function(e,t,n){var r=n("YSF1").createStore,c=n("q0Di").readConfig;e.exports={status:function(e){var t=c(e,["sid","name","loc","effect","defaultValue"]),n=t.sid,a=t.name,i=t.loc,o=t.effect,u=t.defaultValue,s=r(void 0===u?"initial":u,{sid:n,loc:i,name:a});return s.on(o,(function(){return"pending"})).on(o.done,(function(){return"done"})).on(o.fail,(function(){return"fail"})),s}}},q0Di:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){n.filter((function(t){return void 0!==e[t]})).forEach((function(n){t[n]=e[n]}))}e.exports={readConfig:function e(t,c){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return"object"!==n(t)||null===t||(t.config&&e(t.config,c,a),r(t,a,c),t.ɔ&&e(t.ɔ,c,a)),a}}},rEH3:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h}));var r=n("SugE"),c=n("dY8W"),a=n("eZyy"),i=n("6le1");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={currentPage:1,pageSize:10,status:Object(r.e)("initial")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=u(u({},l),e),n=Object(r.d)(),o=Object(r.d)(),s=Object(r.c)((function(e){return a.a.post("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),f=Object(r.c)((function(e){return a.a.delete("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),d=Object(r.e)(t.pageSize),j=i.d.$search.map((function(e){var t;return null!==(t=new URLSearchParams(e).get("tag"))&&void 0!==t?t:""})),b=i.d.$search.map((function(e){var n,r=null!==(n=new URLSearchParams(e).get("page"))&&void 0!==n?n:t.currentPage;return Number(r)})),p=Object(r.e)({articles:[],articlesCount:0}).on([s.done,f.done],(function(e,t){var n=t.params,r=t.result;return u(u({},e),{},{articles:e.articles.map((function(e){return e.slug!==n?e:u(u({},e),{},{favorited:r.article.favorited,favoritesCount:r.article.favoritesCount})}))})})),g=p.map((function(e){return e.articles})),O=p.map((function(e){return e.articlesCount})),v=t.status,h=Object(r.b)(v,g,(function(e,t){return"done"===e&&0===t.length}));Object(r.j)({source:i.d.$pathname,clock:n,fn:function(e,t){return{path:e,page:t}}}).watch((function(e){var t=e.path,n=e.page;i.d.history.replace("".concat(t,"?page=").concat(n))})),Object(r.g)({source:o,filter:function(e){return!0===e.favorited},target:f.prepend((function(e){return e.slug}))}),Object(r.g)({source:o,filter:function(e){return!1===e.favorited},target:s.prepend((function(e){return e.slug}))}),Object(r.g)({source:s.failData,filter:function(e){var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)}}).watch((function(){i.d.history.push(i.b.LOGIN)}));var m=Object(r.b)({pageSize:d,currentPage:b,currentTag:j,totalPages:O,isEmptyFeed:h});return{Gate:Object(c.a)(),currentPageWasSet:n,favoriteToggled:o,setFavoriteArticleFx:s,setUnfavoriteArticleFx:f,$feed:p,$articles:g,$pageSize:d,$currentPage:b,$currentTag:j,$totalPages:O,$isEmptyFeed:h,useModel:function(){return Object(c.d)(m)}}},d=(n("kI28"),n("USb2")),j=n("UYjC"),b=n("oYCi"),p=function(e){var t=e.author,n=e.createdAt,r=e.children;return Object(b.jsxs)("div",{className:"article-meta",children:[Object(b.jsx)(d.a,{to:"/@".concat(t.username),children:Object(b.jsx)("img",{alt:t.username,src:t.image})}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)(d.a,{className:"author",to:"/@".concat(t.username),children:t.username}),Object(b.jsx)("span",{className:"date",children:new Date(n).toDateString()})]}),r]})},g=function(e){var t=e.active,n=e.onClick,r=e.children;return Object(b.jsxs)(j.b,{className:"btn btn-sm btn-outline-primary","data-active":t,onClick:n,children:[Object(b.jsx)("i",{className:"ion-heart"})," ",r]})},O=function(e){var t=e.data,n=t.author,r=t.createdAt,c=t.slug,a=t.title,i=t.description,o=t.tagList,u=t.favorited,s=t.favoritesCount,l=e.onClick;return Object(b.jsxs)("article",{className:"article-preview",children:[Object(b.jsx)(p,{author:n,createdAt:r,children:Object(b.jsx)("div",{className:"pull-xs-right",children:Object(b.jsx)(g,{active:u,onClick:l,children:s})})}),Object(b.jsxs)(d.a,{className:"preview-link",to:"/article/".concat(c),children:[Object(b.jsx)("h1",{children:a}),Object(b.jsx)("p",{children:i}),Object(b.jsx)("span",{children:"Read more..."}),Object(b.jsx)(j.q,{children:o.map((function(e){return Object(b.jsx)(j.p,{children:e.toLowerCase()},e)}))})]})]})},v=function(e){var t=e.children;return Object(b.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},h=function(e){return e.show?Object(b.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null}}}]);