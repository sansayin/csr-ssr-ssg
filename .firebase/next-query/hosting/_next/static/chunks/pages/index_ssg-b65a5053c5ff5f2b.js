(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{6710:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index_ssg",function(){return a(6412)}])},204:function(e,n,a){"use strict";a.d(n,{A:function(){return l},T:function(){return d}});var t=a(5893),i=a(7294),r=a(1163),s=a(4462),c=a(1664),o=a.n(c),u=a(8767);async function l(e){var n;let a=1;(null==e?void 0:null===(n=e.query)||void 0===n?void 0:n.page)&&(a=parseInt(e.query.page));let t=new u.QueryClient;return await t.prefetchQuery(["characters",a],async()=>await fetch("https://rickandmortyapi.com/api/character/?page=".concat(a)).then(e=>e.json())),{props:{dehydratedState:(0,u.dehydrate)(t)}}}let d=function(e){var n;let{props:a}=e,c=(0,r.useRouter)(),[l,d]=(0,i.useState)(parseInt(c.query.page)||1),{data:h}=(0,u.useQuery)(["characters",l],async()=>await fetch("https://rickandmortyapi.com/api/character/?page=".concat(l)).then(e=>e.json()),{keepPreviousData:!0,refetchOnMount:!1,refetchOnWindowFocus:!1});function p(e,n){d(n),c.push("?page=".concat(n),void 0,{shallow:!0})}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o(),{href:"/",children:(0,t.jsx)("h1",{children:"NextJS Render Demos"})}),(0,t.jsxs)("div",{className:"photos",children:[(0,t.jsx)(s.Z,{count:null==h?void 0:h.info.pages,variant:"outlined",color:"primary",className:"pagination",page:l,onChange:p}),(0,t.jsx)("div",{className:"grid-container",children:null==h?void 0:null===(n=h.results)||void 0===n?void 0:n.map(e=>(0,t.jsxs)("article",{children:[(0,t.jsx)("img",{src:e.image,alt:e.name,height:250,loading:"lazy",width:"100%"}),(0,t.jsxs)("div",{className:"text",children:[(0,t.jsxs)("p",{children:["Name: ",e.name]}),(0,t.jsxs)("p",{children:["Lives in: ",e.location.name]}),(0,t.jsxs)("p",{children:["Species: ",e.species]}),(0,t.jsxs)("i",{children:["Id: ",e.id," "]})]})]},e.id))}),(0,t.jsx)(s.Z,{count:null==h?void 0:h.info.pages,variant:"outlined",color:"primary",className:"pagination",page:l,onChange:p})]})]})}},6412:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSG:function(){return i},default:function(){return t.T}});var t=a(204),i=!0}},function(e){e.O(0,[664,562,774,888,179],function(){return e(e.s=6710)}),_N_E=e.O()}]);