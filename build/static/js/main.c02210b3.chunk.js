(this["webpackJsonpbad-bank"]=this["webpackJsonpbad-bank"]||[]).push([[2],{17:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var c=n(15),r=n(12),a=n(0),i=n.n(a),l=n(1),s=Object(a.createContext)();function o(e){var t=e.children,n=i.a.useState([{name:"User",email:"user@email.com",password:"12345678",balance:100,isLogedU:!1}]),a=Object(r.a)(n,2),o=a[0],d=a[1],b=i.a.useState(!1),u=Object(r.a)(b,2),j=u[0],h=u[1];var x={users:o,login:function(e){var t=o.indexOf(e),n=Object(c.a)(o);n[t].isLogedU=!0,d(n),h(!0)},logout:function(e){var t=o.indexOf(e),n=Object(c.a)(o);n[t].isLogedU=!1,d(n),h(!1)},isLogedIn:function(){return j}};return Object(l.jsx)(s.Provider,{value:x,children:t})}},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var c=n(0),r=n.n(c),a=n(1),i=r.a.createContext(null);function l(e){return Object(a.jsxs)(i.Provider,{children:[c.children,Object(a.jsxs)("div",{className:"card mb-3"+(e.bgcolor?"bg-"+e.bgcolor:" ")+(e.txtcolor?"text-"+e.txtcolor:"text-white"),style:{maxWidth:"16rem",marginLeft:"auto",marginRight:"auto",marginTop:"20px",borderRadius:"20px"},children:[Object(a.jsx)("div",{className:"card-header",children:Object(a.jsx)("h4",{children:e.header})}),Object(a.jsxs)("div",{className:"card-body",children:[e.title&&Object(a.jsx)("h5",{className:"card-title",children:e.title}),e.text&&Object(a.jsx)("p",{className:"card-text",children:e.text}),e.body,e.status&&Object(a.jsx)("div",{id:"createStatus",children:e.status})]})]})]})}},20:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(18),r=n.n(c),a=n(0),i=n(10),l=n(2),s=n(19),o=(n(20),n(1)),d=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,104))})),b=Object(a.lazy)((function(){return n.e(13).then(n.bind(null,105))})),u=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,106))})),j=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,111))})),h=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,112))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,113))})),O=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,114))})),m=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,115))})),f=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,116))}));function p(){return Object(o.jsx)(i.b,{children:Object(o.jsx)(i.a,{children:Object(o.jsxs)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"loading..."}),children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{children:Object(o.jsx)(s.b.Provider,{children:Object(o.jsxs)("div",{className:"container",style:{padding:"20px"},children:[Object(o.jsx)(l.b,{path:"/",exact:!0,component:b}),Object(o.jsx)(f,{path:"/createaccount",component:u}),Object(o.jsx)(f,{path:"/login",component:j}),Object(o.jsx)(m,{exact:!0,path:"/deposit",component:h}),Object(o.jsx)(m,{exact:!0,path:"/withdraw",component:x}),Object(o.jsx)(m,{path:"/alldata",component:O})]})})})]})})})}var g=n(17),v=n.p+"static/media/bank_profile.5aaf52bb.jpg";r.a.render(Object(o.jsx)(g.b,{children:Object(o.jsx)(p,{style:{backgroundImage:"url(".concat(v,")")}})}),document.getElementById("root"))}},[[36,3,4]]]);
//# sourceMappingURL=main.c02210b3.chunk.js.map