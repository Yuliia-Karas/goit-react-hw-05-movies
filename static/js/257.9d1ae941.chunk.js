"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{242:function(r,n,e){e.d(n,{TP:function(){return s},UF:function(){return u},tx:function(){return p},z1:function(){return i},zv:function(){return l}});var t=e(861),a=e(687),o=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"f18e42173aa93d2e63f9c91aa9147cf6",language:"en-US"};var u=function(){var r=(0,t.Z)(o().mark((function r(){var n,e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.log(c.Z.defaults),r.next=4,c.Z.get("trending/movie/day");case 4:return n=r.sent,e=n.data,console.log(e),r.abrupt("return",e.results);case 10:return r.prev=10,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,t.Z)(o().mark((function r(n){var e,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.log(c.Z.defaults),r.next=4,c.Z.get("movie/".concat(n));case 4:return e=r.sent,t=e.data,console.log(t),r.abrupt("return",t);case 10:return r.prev=10,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(n){return r.apply(this,arguments)}}(),i=function(){var r=(0,t.Z)(o().mark((function r(n){var e,t,a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.query,r.prev=1,r.next=4,c.Z.get("search/movie?query=".concat(e));case 4:return t=r.sent,a=t.data,console.log(a),r.abrupt("return",a);case 10:return r.prev=10,r.t0=r.catch(1),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(o().mark((function r(n){var e,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("movie/".concat(n,"/credits"));case 3:return e=r.sent,t=e.data,console.log(t),r.abrupt("return",t.cast);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(o().mark((function r(n){var e,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("movie/".concat(n,"/reviews"));case 3:return e=r.sent,t=e.data,console.log(t),r.abrupt("return",t.results);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(n){return r.apply(this,arguments)}}()},257:function(r,n,e){e.r(n),e.d(n,{default:function(){return j}});var t,a,o,c,u=e(861),s=e(439),i=e(687),l=e.n(i),p=e(689),d=e(87),f=e(791),v=e(242),h=e(168),x=e(686),g=x.Z.div(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  border-bottom: 1px solid #000000;\n  padding: 20px;\n"]))),b=x.Z.div(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n  background: #b4afaf;\n  border-radius: 10px;\n  padding: 0px 5px;\n"]))),m=x.Z.p(o||(o=(0,h.Z)(["\n  background: #b4afaf;\n  border-radius: 10px;\n  padding: 9px;\n"]))),Z=(0,x.Z)(d.rU)(c||(c=(0,h.Z)(["\n  display: inline-block;\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n   background-color: #b4afaf;\n  border: 0.5px solid #b4afaf;\n  border-radius: 10px;\n  padding: 5px 5px;\n  margin: 20px;\n  margin-top:50px;\n  text-transform: uppercase;\n   &:hover {\n        color: pink;\n"]))),w=e(184);function j(){var r,n,e=(0,p.UO)().movieId,t=(0,f.useState)(null),a=(0,s.Z)(t,2),o=a[0],c=a[1],i=null!==(r=null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/movies";return(0,f.useEffect)((function(){var r=function(){var r=(0,u.Z)(l().mark((function r(){var n;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,v.TP)(e);case 3:n=r.sent,c(n),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("error",r.t0),c(null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),o?(0,w.jsxs)("main",{children:[(0,w.jsx)(Z,{to:i,children:"Go back"}),(0,w.jsxs)(g,{children:[(0,w.jsx)("img",{width:"200px",height:"300px",src:"https://image.tmdb.org/t/p/original/".concat(o.poster_path),alt:o.title}),(0,w.jsx)("h2",{children:o.title}),(0,w.jsxs)(m,{children:["User Scrore: ",Math.round(10*o.vote_average),"%"]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)(m,{children:o.overview}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)(b,{children:o.genres.map((function(r){return(0,w.jsx)("p",{children:r.name},r.id)}))})]}),(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(p.j3,{})]}):(0,w.jsx)("div",{children:"Loading ..."})}}}]);
//# sourceMappingURL=257.9d1ae941.chunk.js.map