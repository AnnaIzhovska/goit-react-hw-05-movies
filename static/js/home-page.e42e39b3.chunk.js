(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{107:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var r=n(57),a=n.n(r),c=n(70),o=n(58),u=n(63),i=n(0),s=n(2),f=n(59),l=n(60),p=n(69),b=n(71),d=n(1);var j=function(){var t=Object(i.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],j=Object(i.useState)(1),v=Object(u.a)(j,2),O=v[0],m=v[1],h=Object(s.g)();Object(i.useEffect)((function(){function t(){return(t=Object(o.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.a)(O);case 3:e=t.sent,r((function(t){return[].concat(Object(c.a)(t),Object(c.a)(e))})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Object(l.b)();case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[O]);var y=n.length>0;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Trending today"}),n&&Object(d.jsx)(b.a,{movies:n,location:h}),y&&Object(d.jsx)(p.a,{onClick:function(){m((function(t){return t+1}))},"aria-label":"add contact"})]})}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return d}));var r=n(57),a=n.n(r),c=n(58),o=n(66),u=n.n(o),i="https://api.themoviedb.org/3",s="ec2decab2c803075323649cd6bc24f80",f=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat(i,"/movie/popular?api_key=").concat(s,"&language=en-US&page=").concat(e));case 2:return n=t.sent,t.next=5,n.data.results;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.data.cast;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.data.results;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("".concat(i,"/search/movie?api_key=").concat(s,"&page=").concat(n,"&language=en&query=").concat(e));case 2:return r=t.sent,t.next=5,r.data.results;case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},60:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var r=n(18);function a(){r.b.error("Please enter a valid request")}function c(){r.b.warning("Sorry, no results were found")}},61:function(t,e,n){"use strict";e.a=n.p+"static/media/default.2e01288c.jpg"},62:function(t,e,n){t.exports={Button:"Button_Button__ANz9B"}},67:function(t,e,n){t.exports={listItem:"MovieItem_listItem__OHcIP",poster:"MovieItem_poster__qrU0i",title:"MovieItem_title__2eQh2"}},68:function(t,e,n){t.exports={list:"MovieList_list__OHO1I"}},69:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return l}));var u=n(62),i=n.n(u),s=n(1),f=["onClick"];function l(t){var e=t.onClick,n=o(t,f);return Object(s.jsx)("button",c(c({type:"submit",className:i.a.Button,onClick:e},n),{},{children:Object(s.jsx)("span",{children:"Load More"})}))}l.defaultProps={onClick:function(){return null}},l.defaultProps={disabled:!1}},70:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(64);var a=n(65);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(9),a=n(61),c=n(67),o=n.n(c),u=n(1);function i(t){var e=t.id,n=t.title,c=t.location,i=t.poster,s=t.releaseDate,f=t.name;return Object(u.jsx)("li",{className:o.a.listItem,children:Object(u.jsxs)(r.b,{to:{pathname:"/movies/".concat(e),state:{from:c}},children:[Object(u.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):a.a,alt:n||f,className:o.a.poster}),Object(u.jsxs)("h2",{className:o.a.title,children:[n||f,s&&Object(u.jsxs)("span",{children:[" (",s.slice(0,4),")"]})]})]})},e)}var s=n(68),f=n.n(s);function l(t){var e=t.movies,n=t.location;return Object(u.jsx)("ul",{className:f.a.list,children:e&&e.map((function(t){var e=t.id,r=t.title,a=t.name,c=t.poster_path,o=t.release_date;return Object(u.jsx)(i,{id:e,title:r,location:n,name:a,releaseDate:o,poster:c},e)}))})}}}]);
//# sourceMappingURL=home-page.e42e39b3.chunk.js.map