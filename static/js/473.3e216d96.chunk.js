"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[473],{207:function(n,e,t){t.d(e,{CL:function(){return d},Mc:function(){return h},wH:function(){return l},wR:function(){return p},wr:function(){return f}});var r=t(861),c=t(757),u=t.n(c),a="https://api.themoviedb.org/3",o="bd5e1631ed489de1dc8ff7eb8202de51";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(u().mark((function n(){var e,t,r,c=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return i("".concat(a,"/trending/all/day?api_key=").concat(o)).then((function(n){return n.results}))}function h(n){return i("".concat(a,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))}function d(n){return i("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){return n.cast}))}function l(n){return i("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){return n.results}))}function p(n){return i("".concat(a,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1")).then((function(n){return n.results}))}},473:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(885),c=t(871),u=t(791),a=t(207),o="Reviews_author__NQfuB",i=t(184);function s(){var n=(0,c.UO)().movieId,e=(0,u.useState)([]),t=(0,r.Z)(e,2),s=t[0],f=t[1];return(0,u.useEffect)((function(){a.wH(n).then(f)}),[n]),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:s.length>0?s.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{className:o,children:t}),(0,i.jsx)("p",{children:r})]},e)})):(0,i.jsx)("p",{children:"We don't have any reviews for this movie."})})})}}}]);
//# sourceMappingURL=473.3e216d96.chunk.js.map