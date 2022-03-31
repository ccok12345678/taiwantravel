(function(){"use strict";var e={7125:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(1831);function o(e,t,n,o,r,i){const s=(0,a.up)("VueElementLoading");return(0,a.wg)(),(0,a.j4)(s,{"is-full-screen":"",active:!0,spinner:"line-down",size:"50",duration:"0.8",color:"#3FB195","background-color":"rgba(50, 50, 50, .8)",text:"載入中..."})}var r=n(3318),i=n.n(r),s={components:{VueElementLoading:i()}},c=n(497);const l=(0,c.Z)(s,[["render",o],["__scopeId","data-v-b1834b98"]]);var u=l},121:function(e,t){const n=[{name:"全地區",english:"all"},{name:"臺北市",english:"Taipei"},{name:"新北市",english:"NewTaipei"},{name:"桃園市",english:"Taoyuan"},{name:"臺中市",english:"Taichung"},{name:"臺南市",english:"Tainan"},{name:"高雄市",english:"Kaohsiung"},{name:"基隆市",english:"Keelung"},{name:"新竹市",english:"Hsinchu"},{name:"新竹縣",english:"HsinchuCounty"},{name:"苗栗縣",english:"MiaoliCounty"},{name:"彰化縣",english:"ChanghuaCounty"},{name:"南投縣",english:"NantouCounty"},{name:"雲林縣",english:"YunlinCounty"},{name:"嘉義縣",english:"ChiayiCounty"},{name:"嘉義市",english:"Chiayi"},{name:"屏東縣",english:"PingtungCounty"},{name:"宜蘭縣",english:"YilanCounty"},{name:"花蓮縣",english:"HualienCounty"},{name:"臺東縣",english:"TaitungCounty"},{name:"金門縣",english:"KinmenCounty"},{name:"澎湖縣",english:"PenghuCounty"},{name:"連江縣",english:"LienchiangCounty"}];t["Z"]=n},9719:function(e,t,n){var a=n(2847),o=n(3685),r=n(1831),i=n(6923);const s={class:"row g-0"},c={class:"col col-lg-9 order-1"},l={class:"col-3 order-0 d-none d-lg-block"};function u(e,t,n,a,o,u){const d=(0,r.up)("router-view"),h=(0,r.up)("SideMenu"),m=(0,r.up)("metainfo");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",s,[(0,r._)("div",c,[(0,r.Wm)(d)]),(0,r._)("div",l,[(0,r.Wm)(h)])]),(0,r.Wm)(m,null,{title:(0,r.w5)((({metainfo:e})=>[(0,r.Uk)((0,i.zw)(e.titleTemplate(e.title)),1)])),_:1})],64)}var d=n(5303);const h={class:"bg-white vh-100 shadow sticky-top p-4 pt-1 overflow-auto"},m={class:"side-header mt-3"},p=(0,r._)("hr",{class:"my-3"},null,-1),f={class:"side-body"};function g(e,t,n,a,o,i){const s=(0,r.up)("Logo"),c=(0,r.up)("AreaDropdown"),l=(0,r.up)("SearchInput"),u=(0,r.up)("CategoryMenu");return(0,r.wg)(),(0,r.iD)("aside",h,[(0,r._)("header",m,[(0,r.Wm)(s,{class:"mb-3"}),(0,r.Wm)(c,{class:"mb-4"}),(0,r.Wm)(l),p]),(0,r._)("div",f,[(0,r.Wm)(u)])])}var v=n(2835);const b=(0,r._)("img",{src:v,alt:"page logo",height:"40"},null,-1);function y(e,t){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(n,{class:"d-block",to:"/",title:"Taiwan Travel"},{default:(0,r.w5)((()=>[b])),_:1})}var w=n(497);const C={},k=(0,w.Z)(C,[["render",y]]);var _=k;const S=(0,r._)("h6",{class:"mb-4"},"精選主題",-1),I={class:"row gy-2"};function x(e,t,n,a,o,i){const s=(0,r.up)("CategoryButton");return(0,r.wg)(),(0,r.iD)(r.HY,null,[S,(0,r._)("div",I,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.buttons,(e=>((0,r.wg)(),(0,r.j4)(s,{key:e.src,class:"col-6",button:e},null,8,["button"])))),128))])],64)}var P=n(1222);const D=["title"],O=["src","alt"];function T(e,t,n,a,o,s){return(0,r.wg)(),(0,r.iD)("button",{class:"btn d-flex flex-column align-items-center",type:"button",title:n.button.title,onClick:t[0]||(t[0]=(...e)=>a.showTheme&&a.showTheme(...e))},[(0,r._)("img",{src:n.button.src,width:"65",alt:`分類為${n.button.title}`},null,8,O),(0,r._)("span",null,(0,i.zw)(n.button.title),1)],8,D)}var N={props:{button:{type:Object,default:()=>({title:"探索台灣",src:"https://i.ibb.co/125cfL1/illustration-sm.png"})}},setup(e){const t=(0,d.tv)(),n=(0,d.yj)(),a=(0,P.qj)(e.button);function o(){n.params.cityId&&"all"!==n.params.cityId?a.keywords.length?t.push({name:`${a.routeName}OfCity`,params:{cityId:n.params.cityId,searchKeyword:`${a.keywords.join(" ")}`}}):t.push({name:`${a.routeName.replace("Search","")}OfCity`,params:{cityId:n.params.cityId}}):a.keywords.length?t.push({name:a.routeName,path:"search",params:{searchKeyword:`${a.keywords.join(" ")}`}}):t.push({name:`${a.routeName.replace("Search","")}`})}return{showTheme:o}}};const j=(0,w.Z)(N,[["render",T],["__scopeId","data-v-115db1ba"]]);var M=j,E={components:{CategoryButton:M},setup(){const e=(0,P.iH)([{title:"歷史文化",src:"https://i.ibb.co/Y3HKwsR/Frame-40.png",routeName:"attractionsSearch",keywords:["文化","古蹟"]},{title:"戶外踏青",src:"https://i.ibb.co/qJQLLGd/Frame-40-1.png",routeName:"attractionsSearch",keywords:["公園類","生態","林場","森林遊樂區"]},{title:"宗教巡禮",src:"https://i.ibb.co/hCrpLDH/Frame-40-2.png",routeName:"attractionsSearch",keywords:["廟","寺","教堂","教會","壇"]},{title:"親子活動",src:"https://i.ibb.co/pyXVpSy/Frame-40-3.png",routeName:"activitiesSearch",keywords:["親子"]},{title:"風景區",src:"https://i.ibb.co/vPDSXd8/Frame-40-4.png",routeName:"attractionsSearch",keywords:["國家風景區","自然風景"]},{title:"美食品嚐",src:"https://i.ibb.co/CVbFpJY/Frame-40-5.png",routeName:"restaurantsSearch",keywords:[]},{title:"住宿推薦",src:"https://i.ibb.co/Wz6kDCt/Frame-40-6.png",routeName:"hotelsSearch",keywords:[]},{title:"觀光活動",src:"https://i.ibb.co/ncmxHdQ/Frame-40-7.png",routeName:"activitiesSearch",keywords:[]}]);return{buttons:e}}};const Z=(0,w.Z)(E,[["render",x]]);var K=Z,H=n(6756),L=n(1862);const W=e=>((0,r.dD)("data-v-9371430c"),e=e(),(0,r.Cn)(),e),A={class:"dropdown"},F={class:"dropdown-btn bg-light border rounded d-flex text-decoration-none",id:"dropdownMenuLink","data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false",title:"選擇地區"},B={key:0,class:"text-muted lh-1 my-auto"},$={key:1,class:"text-dark lh-1 my-auto"},Y=W((()=>(0,r._)("img",{src:H,width:"12",alt:"cancel button"},null,-1))),V=[Y],z=W((()=>(0,r._)("div",{class:"ms-auto d-flex"},[(0,r._)("img",{class:"my-auto",src:L,alt:"dropdown menu button"})],-1))),q={class:"dropdown-menu border-0 shadow w-100","aria-labelledby":"dropdownMenuLink"},U={class:"row g-2"};function R(e,t,n,o,s,c){const l=(0,r.up)("DropdownButton");return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("a",F,[o.cityName?((0,r.wg)(),(0,r.iD)("div",$,[(0,r.Uk)((0,i.zw)(o.cityName),1),(0,r._)("a",{class:"text-muted p-2",href:"#",title:"取消",role:"button",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>o.cancelCity&&o.cancelCity(...e)),["prevent"]))},V)])):((0,r.wg)(),(0,r.iD)("div",B,"目的地")),z]),(0,r._)("div",q,[(0,r._)("div",U,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.cities,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col-xl-4 col-lg-6 col-4",key:e.english},[(0,r.Wm)(l,{city:e,onEmitClick:o.handleClick},null,8,["city","onEmitClick"])])))),128))])])])}const J=["title"];function Q(e,t,n,a,o,s){return(0,r.wg)(),(0,r.iD)("button",{class:"menu-button rounded text-nowrap",type:"button",title:n.city.name,onClick:t[0]||(t[0]=(...e)=>a.handleClick&&a.handleClick(...e))},(0,i.zw)(n.city.name),9,J)}var X={props:{city:{type:Object,default:()=>({name:"臺灣",english:"Taiwan"})}},setup(e,t){const{emit:n}=t,a=(0,d.tv)(),o=()=>{n("emit-click",e.city),a.push({name:"attractionsOfCity",params:{cityId:e.city.english}})};return{handleClick:o}}};const G=(0,w.Z)(X,[["render",Q]]);var ee=G,te=n(121),ne={components:{DropdownButton:ee},setup(e){const t=(0,P.iH)(null),n=e=>{t.value=e.name},a=()=>{t.value=null};return{cities:te.Z,cityName:t,handleClick:n,cancelCity:a}}};const ae=(0,w.Z)(ne,[["render",R],["__scopeId","data-v-9371430c"]]);var oe=ae,re=n(9262);const ie=e=>((0,r.dD)("data-v-cb1c927c"),e=e(),(0,r.Cn)(),e),se={class:"d-block",for:"keyword"},ce=ie((()=>(0,r._)("small",{class:"d-none"},"輸入關鍵字",-1))),le={class:"input-group border rounded bg-light"},ue=ie((()=>(0,r._)("img",{class:"my-auto",src:re,alt:"search icon"},null,-1))),de=[ue];function he(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("label",se,[ce,(0,r._)("div",le,[(0,r.wy)((0,r._)("input",{class:"form-control border-0",id:"keyword",type:"search",placeholder:"搜尋關鍵字","onUpdate:modelValue":t[0]||(t[0]=e=>o.keyword=e),onInput:t[1]||(t[1]=(0,a.iM)(((...e)=>o.handleInput&&o.handleInput(...e)),["prevent"]))},null,544),[[a.nr,o.keyword,void 0,{trim:!0}]]),(0,r._)("button",{class:"btn d-flex",type:"button",title:"搜尋",onClick:t[2]||(t[2]=(...e)=>o.handleInput&&o.handleInput(...e))},de)])])}var me=n(3120),pe={setup(e){const t=(0,P.iH)(""),n=(0,P.iH)(""),a=(0,d.tv)(),o=(0,d.yj)();function i(){const e=o.name.replace("Search","").replace("OfCity","");n.value&&"all"!==n.value?t.value?a.push({name:`${e}SearchOfCity`,params:{cityId:n.value,searchKeyword:t.value}}):a.push({name:`${e}OfCity`,params:{cityId:n.value}}):t.value?a.push({name:`${e}Search`,params:{searchKeyword:t.value}}):a.push({name:e})}return t.value=o.params.searchKeyword,me.Z.on("emit-cityName",(e=>{n.value=e})),(0,r.YP)((()=>o.params.cityId),(()=>{t.value="",n.value=""})),{keyword:t,handleInput:i}}};const fe=(0,w.Z)(pe,[["render",he],["__scopeId","data-v-cb1c927c"]]);var ge=fe,ve={components:{Logo:_,CategoryMenu:K,AreaDropdown:oe,SearchInput:ge}};const be=(0,w.Z)(ve,[["render",g]]);var ye=be,we={components:{SideMenu:ye},setup(e){const t=(0,d.yj)();(0,r.YP)((()=>t.path),(()=>{window.scrollTo(0,0)})),(0,o.jq)({title:"",titleTemplate:e=>e?`${e} | 台灣旅遊景點導覽 THE F2E`:"台灣旅遊景點導覽 THE F2E",htmlAttrs:{lang:"zh-Hant-TW"}})}};const Ce=(0,w.Z)(we,[["render",u]]);var ke=Ce;const _e={class:"min-vh-100 d-flex flex-column"},Se={class:"container-fluid p-4"};function Ie(e,t,n,a,o,i){const s=(0,r.up)("NavBar"),c=(0,r.up)("Banner"),l=(0,r.up)("router-view"),u=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",_e,[(0,r.Wm)(s,{class:"sticky-top"}),(0,r._)("div",Se,["frontpage"===e.$route.name?((0,r.wg)(),(0,r.j4)(c,{key:0})):(0,r.kq)("",!0),(0,r.Wm)(l)]),(0,r.Wm)(u,{class:"mt-auto"})])}var xe=n(3303);const Pe=(0,r.uE)('<header class="bg-white shadow rounded d-flex justify-content-between align-items-center" data-v-8a24a7d2><div class="slogan flex-fill" data-v-8a24a7d2><h1 data-v-8a24a7d2>探索。<br data-v-8a24a7d2>福爾摩沙</h1></div><div class="w-50 mt-auto flex-fill" data-v-8a24a7d2><img class="img-fluid" src="'+xe+'" alt="heading illustration" data-v-8a24a7d2></div></header><div class="py-3 mt-2" data-v-8a24a7d2></div>',2);function De(e,t){return Pe}const Oe={},Te=(0,w.Z)(Oe,[["render",De],["__scopeId","data-v-8a24a7d2"]]);var Ne=Te;const je={class:"bg-primary text-white text-center py-2"};function Me(e,t){return(0,r.wg)(),(0,r.iD)("div",je,"TAIWAN TRAVEL")}const Ee={},Ze=(0,w.Z)(Ee,[["render",Me]]);var Ke=Ze,He=n(8384);const Le=e=>((0,r.dD)("data-v-429f1b6e"),e=e(),(0,r.Cn)(),e),We={class:"bg-white"},Ae={class:"d-flex justify-content-center py-2 ps-3 shadow d-lg-none border-bottom"},Fe=Le((()=>(0,r._)("img",{src:He,alt:"menu toggle button"},null,-1))),Be=[Fe];function $e(e,t,n,a,o,i){const s=(0,r.up)("Logo"),c=(0,r.up)("OffcanvasMenu");return(0,r.wg)(),(0,r.iD)("nav",We,[(0,r._)("div",Ae,[(0,r._)("button",{class:"btn btn-third border-0 shadow-0 my-auto me-auto",type:"button",title:"開啟選單",ref:"button",onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},Be,512),(0,r.Wm)(s,{class:"logo me-auto"})]),(0,r.Wm)(c,{isShow:a.isShow,onEmitToggle:a.toggleMenu},null,8,["isShow","onEmitToggle"])])}const Ye=e=>((0,r.dD)("data-v-fd5700f4"),e=e(),(0,r.Cn)(),e),Ve={class:"side-header mt-2 text-center"},ze=Ye((()=>(0,r._)("hr",{class:"my-3"},null,-1))),qe={class:"side-body pb-5 mb-3"};function Ue(e,t,n,a,o,s){const c=(0,r.up)("AreaDropdown"),l=(0,r.up)("SearchInput"),u=(0,r.up)("CategoryMenu");return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["toggle-menu bg-white w-100 d-lg-none overflow-auto px-3",{show:n.isShow}])},[(0,r._)("header",Ve,[(0,r.Wm)(c,{class:"mb-2 pb-1"}),(0,r.Wm)(l),ze]),(0,r._)("div",qe,[(0,r.Wm)(u)]),(0,r._)("footer",{class:(0,i.C_)(["px-3 py-2 bg-white fixed-bottom",{show:n.isShow}])},[(0,r._)("button",{class:"menu-button bg-primary text-white fs-6 rounded",type:"button",onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},"開始搜尋")],2)],2)}var Re={components:{CategoryMenu:K,AreaDropdown:oe,SearchInput:ge},props:{isShow:{type:Boolean,default:()=>!1}},setup(e,t){const{emit:n}=t;function a(){n("emit-toggle")}return{toggleMenu:a}}};const Je=(0,w.Z)(Re,[["render",Ue],["__scopeId","data-v-fd5700f4"]]);var Qe=Je,Xe={components:{Logo:_,OffcanvasMenu:Qe},setup(){const e=(0,P.iH)(!1);function t(){e.value=!e.value}return{isShow:e,toggleMenu:t}}};const Ge=(0,w.Z)(Xe,[["render",$e],["__scopeId","data-v-429f1b6e"]]);var et=Ge,tt={name:"HomeView",components:{Banner:Ne,Footer:Ke,NavBar:et}};const nt=(0,w.Z)(tt,[["render",Ie]]);var at=nt;const ot=[{path:"/",name:"home",component:at,children:[{path:"/",name:"frontpage",component:()=>Promise.all([n.e(724),n.e(600)]).then(n.bind(n,7068))},{path:"attractions",name:"attractions",component:()=>Promise.all([n.e(724),n.e(68),n.e(938)]).then(n.bind(n,3625)),children:[{path:"search/:searchKeyword",name:"attractionsSearch",component:()=>Promise.all([n.e(724),n.e(68),n.e(938)]).then(n.bind(n,3625))},{path:"search/:searchKeyword",name:"frontpageSearch",component:()=>Promise.all([n.e(724),n.e(68),n.e(938)]).then(n.bind(n,3625))}]},{path:"attractions/:attractionId",name:"attractionInfo",component:()=>Promise.all([n.e(724),n.e(642),n.e(505)]).then(n.bind(n,7368))},{path:"activities",name:"activities",component:()=>Promise.all([n.e(724),n.e(68),n.e(333)]).then(n.bind(n,810)),children:[{path:"search/:searchKeyword",name:"activitiesSearch",component:()=>Promise.all([n.e(724),n.e(68),n.e(333)]).then(n.bind(n,810))}]},{path:"activities/:activityId",name:"activityInfo",component:()=>Promise.all([n.e(724),n.e(642),n.e(259)]).then(n.bind(n,3921))},{path:"restaurants",name:"restaurants",component:()=>Promise.all([n.e(724),n.e(68),n.e(680)]).then(n.bind(n,5196)),children:[{path:"search/:searchKeyword",name:"restaurantsSearch",component:()=>Promise.all([n.e(724),n.e(68),n.e(680)]).then(n.bind(n,5196))}]},{path:"restaurants/:restaurantId",name:"restaurantInfo",component:()=>Promise.all([n.e(724),n.e(642),n.e(850)]).then(n.bind(n,7949))},{path:"hotels",name:"hotels",component:()=>Promise.all([n.e(724),n.e(68),n.e(744)]).then(n.bind(n,6743)),children:[{path:"search/:searchKeyword",name:"hotelsSearch",component:()=>Promise.all([n.e(724),n.e(68),n.e(744)]).then(n.bind(n,6743))}]},{path:"hotels/:hotelId",name:"hotelInfo",component:()=>Promise.all([n.e(724),n.e(642),n.e(224)]).then(n.bind(n,4219))},{path:"city/:cityId/attractions",name:"attractionsOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(84)]).then(n.bind(n,590)),children:[{path:"search/:searchKeyword",name:"attractionsSearchOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(84)]).then(n.bind(n,590))}]},{path:"city/:cityId/activities",name:"activitiesOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(650)]).then(n.bind(n,7236)),children:[{path:"search/:searchKeyword",name:"activitiesSearchOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(650)]).then(n.bind(n,7236))}]},{path:"city/:cityId/restaurants",name:"restaurantsOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(905)]).then(n.bind(n,2470)),children:[{path:"search/:searchKeyword",name:"restaurantsSearchOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(905)]).then(n.bind(n,2470))}]},{path:"city/:cityId/hotels",name:"hotelsOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(904)]).then(n.bind(n,1421)),children:[{path:"search/:searchKeyword",name:"hotelsSearchOfCity",component:()=>Promise.all([n.e(724),n.e(68),n.e(904)]).then(n.bind(n,1421))}]}]}],rt=(0,d.p7)({history:(0,d.r5)(),routes:ot});var it=rt,st=(n(4852),n(727)),ct=n.n(st),lt=n(7125);const ut={class:"message fs-4"};function dt(e,t){return(0,r.wg)(),(0,r.iD)("div",ut,"沒有相關資料 D:")}const ht={},mt=(0,w.Z)(ht,[["render",dt]]);var pt=mt;const ft=(0,o.Bg)(),gt=(0,a.ri)(ke);gt.use(it).use(ct()).use(ft).use(o.BA).component("VueLoading",lt.Z).component("NoResultMessage",pt).mount("#app")},3120:function(e,t,n){var a=n(4039);const o=(0,a.Z)();t["Z"]=o},1862:function(e,t,n){e.exports=n.p+"img/arrow_down_circle.69552a4a.svg"},9262:function(e,t,n){e.exports=n.p+"img/search.6177828e.svg"},8384:function(e,t,n){e.exports=n.p+"img/slider_icon.5bbf3689.svg"},6756:function(e,t,n){e.exports=n.p+"img/x_icon.52280dec.svg"},2835:function(e,t,n){e.exports=n.p+"img/logo.6f30daf4.svg"},3303:function(e,t,n){e.exports=n.p+"img/illustration.4f8fafab.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{68:"4e30e6eb",84:"79c93bb7",224:"2bab1db0",259:"6ef768a7",333:"9b06d025",505:"d9e54c63",600:"238a14c9",642:"cafe3300",650:"b743737b",680:"2a6dd825",724:"6d146c04",744:"d9e7f3c4",850:"ac819998",904:"2007580e",905:"efad0df3",938:"817f85de"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{84:"6c0ed826",224:"accde275",259:"d719920d",333:"57a4596a",505:"6abf6b57",600:"c533fa7b",650:"57a4596a",680:"ae6bc68f",744:"8024bcb2",850:"504ee73c",904:"8024bcb2",905:"ae6bc68f",938:"6c0ed826"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="taiwan-travel:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/taiwantravel/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return o();e(a,s,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={84:1,224:1,259:1,333:1,505:1,600:1,650:1,680:1,744:1,850:1,904:1,905:1,938:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(a);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunktaiwan_travel"]=self["webpackChunktaiwan_travel"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9719)}));a=n.O(a)})();
//# sourceMappingURL=app.617aa61f.js.map