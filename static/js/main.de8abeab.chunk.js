(this.webpackJsonpuserlist=this.webpackJsonpuserlist||[]).push([[0],{32:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),r=s(10),i=s.n(r),j=s(8),l=s(2),u=s(6),a=s(15),o=Object(a.b)({name:"userList",initialState:{users:[],user:!1},reducers:{setUsers:function(e,t){console.log(t),e.users=t.payload},setUser:function(e,t){console.log(t),e.user=t.payload}}}),d=o.actions,h=d.setUsers,b=d.setUser,O=Object(a.a)({reducer:{userList:o.reducer}}),x=s(1),m=function(){var e=Object(u.c)((function(e){return e.userList.users})),t=Object(u.b)(),s=function(e){return t(h(e))};return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(){s(null)}))}),[]),console.log(e),Object(x.jsxs)(n.a.Fragment,{children:[Object(x.jsx)("h2",{children:"Users"}),e&&Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Email"})]})}),Object(x.jsx)("tbody",{children:e.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(j.b,{to:"/user/".concat(e.id),children:e.name})}),Object(x.jsx)("td",{children:e.email})]},e.id)}))})]}),null===e&&Object(x.jsx)("div",{children:"Request Error"})]})},f=function(){var e=Object(u.c)((function(e){return e.userList.user})),t=Object(u.b)(),s=function(e){return t(b(e))},r=Object(l.f)().id;return Object(c.useEffect)((function(){r&&fetch("https://jsonplaceholder.typicode.com/users/".concat(r)).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(){s(null)}))}),[]),Object(x.jsxs)(n.a.Fragment,{children:[Object(x.jsx)("h2",{children:"User Info"}),e&&Object(x.jsxs)("ul",{className:"list-group",children:[Object(x.jsxs)("li",{className:"list-group-item",children:["name: ",e.name]}),Object(x.jsxs)("li",{className:"list-group-item",children:["userName: ",e.username]}),Object(x.jsxs)("li",{className:"list-group-item",children:["address: ",e.address.city,", ",e.address.street]}),Object(x.jsxs)("li",{className:"list-group-item",children:["company: ",e.company.name]})]}),null===e&&Object(x.jsx)("div",{children:"Request Error"})]})};function p(){return Object(x.jsx)(u.a,{store:O,children:Object(x.jsx)(j.a,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{path:"/",exact:!0,children:Object(x.jsx)(m,{})}),Object(x.jsx)(l.a,{path:"/user/:id",children:Object(x.jsx)(f,{})})]})})})})}i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(p,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.de8abeab.chunk.js.map