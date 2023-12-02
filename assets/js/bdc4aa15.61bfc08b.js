"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[5780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Manage multiple user",excerpt:"In this document I explain how to manage users",sidebar_position:2},i=void 0,s={unversionedId:"user-guide/managing-users",id:"user-guide/managing-users",title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Manage multiple user",description:"Manage User",source:"@site/docs/user-guide/managing-users.md",sourceDirName:"user-guide",slug:"/user-guide/managing-users",permalink:"/docs/user-guide/managing-users",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/user-guide/managing-users.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Manage multiple user",excerpt:"In this document I explain how to manage users",sidebar_position:2},sidebar:"userguide",previous:{title:"\ud83d\udcc2 Internal files",permalink:"/docs/user-guide/internal-files"},next:{title:"\ud83d\ude03 Face recognition",permalink:"/docs/user-guide/face-recognition"}},l={},u=[{value:"Manage User",id:"manage-user",level:3},{value:"User Registration",id:"user-registration",level:2},{value:"How to change the admin password, when you can&#39;t log in",id:"how-to-change-the-admin-password-when-you-cant-log-in",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"manage-user"},"Manage User"),(0,a.kt)("p",null,"Click on your Avatar \u2192 Admin Area to navigate to your user panel."),(0,a.kt)("p",null,"The user panel is at the bottom of the page above the worker logs."),(0,a.kt)("p",null,"You can create, delete and manage users of your instance. You can change the scan path, password, name and e-mail of a given user."),(0,a.kt)("h2",{id:"user-registration"},"User Registration"),(0,a.kt)("p",null,"Click on your Avatar \u2192 Admin Area to the user registration setting."),(0,a.kt)("p",null,"You can also activate user registration, where user can create an account themselves. They cannot change the path, which means the admin is still in full control."),(0,a.kt)("h2",{id:"how-to-change-the-admin-password-when-you-cant-log-in"},"How to change the admin password, when you can't log in"),(0,a.kt)("p",null,"There are two ways to accomplish that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"If you set the credentials of the admin in your environment variables, then the password should reset on a reboot"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"If you have access to your container, you can change the password by executing a Django management command ",(0,a.kt)("inlineCode",{parentName:"li"},"docker exec -it [backend container name] python manage.py changepassword [admin username]"))))))}d.isMDXComponent=!0}}]);