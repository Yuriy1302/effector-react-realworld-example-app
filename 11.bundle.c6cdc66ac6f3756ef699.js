(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"++iX":function(e,t,n){"use strict";n.r(t),n.d(t,"GlobalFeedPage",(function(){return Y}));var c=n("dY8W"),a=n("VU9o"),r=n("UYjC"),o=n("SugE"),i=n("eZyy"),u=n("YzYS"),s=a.e(),g=s.Gate,j=s.currentPageWasSet,f=s.favoriteToggled,b=s.$currentPage,d=s.$articles,l=(s.$totalPages,s.$feed),p=s.$pageSize,O=s.useModel,S=Object(o.c)((function(e){var t=e.pageSize,n=e.page;return i.a.get("articles?".concat(Object(u.a)(t,n))).then((function(e){return e.data}))}));l.on(S.doneData,(function(e,t){return t})),Object(o.f)({from:[g.open,j],to:Object(o.a)({source:{pageSize:p,page:b},effect:S})});var z=n("oYCi"),Y=function(){Object(c.b)(g);var e=Object(c.d)(S.pending),t=O(),n=t.totalPages,o=t.currentPage,i=t.pageSize;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(a.c,{children:Object(c.c)(d,(function(e){return Object(z.jsx)("li",{children:Object(z.jsx)(a.b,{data:e,onClick:function(){return f(e)}})})}))}),Object(z.jsx)(r.m,{current:o,pageSize:i,total:n,onItemClick:j}),Object(z.jsx)(r.o,{loading:e})]})}},YzYS:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(e,t){return"limit=".concat(e,"&offset=").concat(t*e)}}}]);