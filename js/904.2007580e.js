"use strict";(self["webpackChunktaiwan_travel"]=self["webpackChunktaiwan_travel"]||[]).push([[904],{8533:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(1831),o=a(6923),n=a(883),i=a(3303);const c=e=>((0,l.dD)("data-v-340fc5cd"),e=e(),(0,l.Cn)(),e),r=c((()=>(0,l._)("img",{class:"position-absolute link",src:n,alt:"link icon"},null,-1))),s=["src","alt"],u={key:1,class:"object-cover w-100",src:i,alt:"該資料沒有圖片",title:"該資料沒有圖片",height:"163"},d={class:"px-3 py-2"},h={class:"text-dark text-truncate"},m={class:"vstack"},g=["title"],p=["title"];function v(e,t,a,n,i,c){const v=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(v,{class:"rounded overflow-hidden bg-white shadow d-block position-relative",to:`/hotels/${a.hotel.HotelID}`,title:a.hotel.HotelName},{default:(0,l.w5)((()=>[r,"PictureUrl1"in a.hotel.Picture?((0,l.wg)(),(0,l.iD)("img",{key:0,class:"object-cover w-100",src:a.hotel.Picture.PictureUrl1,alt:a.hotel.HotelName,height:"163"},null,8,s)):((0,l.wg)(),(0,l.iD)("img",u)),(0,l._)("div",d,[(0,l._)("h4",h,(0,o.zw)(a.hotel.HotelName),1),(0,l._)("div",m,[(0,l._)("div",{class:"phone mb-2 text-truncate",title:n.phoneNumber},(0,o.zw)(n.phoneNumber),9,g),(0,l._)("div",{class:"location me-3 text-truncate",title:a.hotel.Address},(0,o.zw)(a.hotel.Address),9,p)])])])),_:1},8,["to","title"])}var w=a(1222),y={props:{hotel:{type:Object,default:()=>{}}},setup(e){const t=(0,w.iH)(e.hotel.Phone.replace("886-","0"));return{phoneNumber:t}}},f=a(497);const k=(0,f.Z)(y,[["render",v],["__scopeId","data-v-340fc5cd"]]);var b=k},1421:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var l=a(1831),o=a(6923);const n={class:"mb-3 mb-md-4"},i={class:"row gy-2 gy-md-4"},c={class:"d-flex justify-content-center"};function r(e,t,a,r,s,u){const d=(0,l.up)("SortBar"),h=(0,l.up)("Card"),m=(0,l.up)("NoResultMessage"),g=(0,l.up)("Paginate"),p=(0,l.up)("VueLoading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("h3",n,(0,o.zw)(r.cityName.name)+"：住宿推薦",1),(0,l.Wm)(d,{class:"mb-3 mb-md-4"}),(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.pagination.pageData,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"col-12 col-sm-6 col-md-4",key:e.HotelID},[(0,l.Wm)(h,{class:"w-100",hotel:e},null,8,["hotel"])])))),128))]),"pageData"in r.pagination&&!r.pagination.pageData.length?((0,l.wg)(),(0,l.j4)(m,{key:0,class:"my-2 my-md-4"})):(0,l.kq)("",!0),(0,l._)("nav",c,[(0,l.Wm)(g,{"page-count":r.pagination.pageTotal,"click-handler":r.changePage},null,8,["page-count","click-handler"])]),r.isLoading?((0,l.wg)(),(0,l.j4)(p,{key:1})):(0,l.kq)("",!0)],64)}var s=a(1222),u=a(5303),d=a(2814),h=a(3001),m=a(1669),g=a(8533),p=a(1239),v=a(121),w=a(3120),y=a(4897),f=a(3685),k={components:{SortBar:m.Z,Card:g.Z,Paginate:p.Z},setup(){const e=(0,u.yj)(),{cityId:t,searchKeyword:a}=e.params,o=(0,s.iH)([]),n=(0,s.iH)({}),i=(0,s.iH)(""),c=(0,s.iH)(!0),r=`v2/Tourism/Hotel/${t}?%24format=JSON`;function m(t){window.scrollTo(0,0),n.value=(0,h.Z)((0,y.IS)(e.params.searchKeyword,o.value),t)}return(0,l.bv)((async()=>{i.value=v.Z.filter((e=>e.english===t))[0];try{o.value=await(0,d.Z)(r),n.value=(0,h.Z)((0,y.IS)(a,o.value)),c.value=!1}catch(e){console.log("fetch error",e)}w.Z.emit("emit-cityName",i.value.english)})),(0,l.YP)((()=>e.params.cityId),(async t=>{c.value=!0,i.value=v.Z.filter((e=>e.english===t))[0];try{const a=`v2/Tourism/Hotel/${"all"===t?"":t}?%24format=JSON`;o.value=await(0,d.Z)(a),n.value=(0,h.Z)((0,y.IS)(e.params.searchKeyword,o.value)),c.value=!1}catch(a){console.log("fetch error",a)}w.Z.emit("emit-cityName",t)})),(0,l.YP)((()=>e.params.searchKeyword),(e=>{n.value=(0,h.Z)((0,y.IS)(e,o.value))})),(0,f.jq)({title:"地區住宿"}),{cityName:i,isLoading:c,pagination:n,changePage:m}}},b=a(497);const Z=(0,b.Z)(k,[["render",r]]);var H=Z}}]);
//# sourceMappingURL=904.2007580e.js.map