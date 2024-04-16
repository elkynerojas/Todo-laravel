import{A as b}from"./ApplicationLogo-BgCx_ci1.js";import{a as _,_ as y}from"./DropdownLink-BKH2IBRf.js";import{h as v,o as l,c as x,w as a,r as c,n as d,u as h,i as p,m as w,f as u,b as e,a as s,d as i,t as m,g as $,F as k,Z as B}from"./app-D5kEYsSE.js";import L from"./DeleteUserForm-D7rMVXA1.js";import N from"./UpdatePasswordForm-C3Ly6ZaK.js";import C from"./UpdateProfileInformationForm-DfpYm6Zm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TextInput-Ch6SjY0v.js";import"./PrimaryButton-Dkk46hBE.js";const M={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const o=r,t=v(()=>o.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(n,g)=>(l(),x(h(p),{href:r.href,class:d(t.value)},{default:a(()=>[c(n.$slots,"default")]),_:3},8,["href","class"]))}},f={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const o=r,t=v(()=>o.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(n,g)=>(l(),x(h(p),{href:r.href,class:d(t.value)},{default:a(()=>[c(n.$slots,"default")]),_:3},8,["href","class"]))}},V={class:"min-h-screen bg-gray-100"},S={class:"bg-white border-b border-gray-100"},j={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},D={class:"flex justify-between h-16"},E={class:"flex"},P={class:"shrink-0 flex items-center"},A={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},q={class:"hidden sm:flex sm:items-center sm:ms-6"},z={class:"ms-3 relative"},F={class:"inline-flex rounded-md"},O={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},R=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),T={class:"-me-2 flex items-center sm:hidden"},Z={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},G={class:"pt-2 pb-3 space-y-1"},H={class:"pt-4 pb-1 border-t border-gray-200"},I={class:"px-4"},J={class:"font-medium text-base text-gray-800"},K={class:"font-medium text-sm text-gray-500"},Q={class:"mt-3 space-y-1"},U={key:0,class:"bg-white shadow"},W={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},X={__name:"AuthenticatedLayout",setup(r){const o=w(!1);return(t,n)=>(l(),u("div",null,[e("div",V,[e("nav",S,[e("div",j,[e("div",D,[e("div",E,[e("div",P,[s(h(p),{href:t.route("dashboard")},{default:a(()=>[s(b,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",A,[s(M,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[i(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",q,[e("div",z,[s(y,{align:"right",width:"48"},{trigger:a(()=>[e("span",F,[e("button",O,[i(m(t.$page.props.auth.user.name)+" ",1),R])])]),content:a(()=>[s(_,{href:t.route("profile.edit")},{default:a(()=>[i(" Profile ")]),_:1},8,["href"]),s(_,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>[i(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",T,[e("button",{onClick:n[0]||(n[0]=g=>o.value=!o.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(l(),u("svg",Z,[e("path",{class:d({hidden:o.value,"inline-flex":!o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:d({hidden:!o.value,"inline-flex":o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:d([{block:o.value,hidden:!o.value},"sm:hidden"])},[e("div",G,[s(f,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[i(" Dashboard ")]),_:1},8,["href","active"])]),e("div",H,[e("div",I,[e("div",J,m(t.$page.props.auth.user.name),1),e("div",K,m(t.$page.props.auth.user.email),1)]),e("div",Q,[s(f,{href:t.route("profile.edit")},{default:a(()=>[i(" Profile ")]),_:1},8,["href"]),s(f,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>[i(" Log Out ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(l(),u("header",U,[e("div",W,[c(t.$slots,"header")])])):$("",!0),e("main",null,[c(t.$slots,"default")])])]))}},Y=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Profile",-1),ee={class:"py-12"},te={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},se={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},oe={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},ae={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},fe={__name:"Edit",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(r){return(o,t)=>(l(),u(k,null,[s(h(B),{title:"Profile"}),s(X,null,{header:a(()=>[Y]),default:a(()=>[e("div",ee,[e("div",te,[e("div",se,[s(C,{"must-verify-email":r.mustVerifyEmail,status:r.status,class:"max-w-xl"},null,8,["must-verify-email","status"])]),e("div",oe,[s(N,{class:"max-w-xl"})]),e("div",ae,[s(L,{class:"max-w-xl"})])])])]),_:1})],64))}};export{fe as default};
