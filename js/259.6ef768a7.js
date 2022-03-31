"use strict";(self["webpackChunktaiwan_travel"]=self["webpackChunktaiwan_travel"]||[]).push([[259],{7512:function(t,i,e){e.d(i,{Z:function(){return P}});var a=e(1831),c=e(6923),n=e(883),o=e(3303);const r=t=>((0,a.dD)("data-v-7338a29f"),t=t(),(0,a.Cn)(),t),l=r((()=>(0,a._)("img",{class:"position-absolute link",src:n,alt:"link icon"},null,-1))),s=["src","alt"],v={key:1,class:"object-cover w-100",src:o,alt:"該資料沒有圖片",title:"該資料沒有圖片",height:"163"},u={class:"px-3 py-2"},p={class:"text-dark text-truncate"},y={class:"vstack"},d=["title"],m=["title"];function w(t,i,e,n,o,r){const w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(w,{class:"rounded overflow-hidden bg-white shadow d-block position-relative h-100",to:`/activities/${e.activity.ActivityID}`,title:e.activity.ActivityName},{default:(0,a.w5)((()=>[l,"PictureUrl1"in e.activity.Picture?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"object-cover w-100",src:e.activity.Picture.PictureUrl1,alt:e.activity.Picture.PictureDescription1,height:"163"},null,8,s)):((0,a.wg)(),(0,a.iD)("img",v)),(0,a._)("div",u,[(0,a._)("h4",p,(0,c.zw)(e.activity.ActivityName),1),(0,a._)("div",y,[(0,a._)("div",{class:"open-time mb-2 text-truncate",title:`${n.start} ~ ${n.end}`},(0,c.zw)(n.start)+" ~ "+(0,c.zw)(n.end),9,d),(0,a._)("div",{class:"location me-3 text-truncate",title:e.activity.Location},(0,c.zw)(e.activity.Location),9,m)])])])),_:1},8,["to","title"])}var f=e(1222),g={props:{activity:{type:Object,default:()=>{}}},setup(t){const{StartTime:i,EndTime:e}=(0,f.BK)(t.activity),a=new Date(i.value).toLocaleString().replace("上午12:00:00",""),c=new Date(e.value).toLocaleString().replace("上午12:00:00","");return{start:a,end:c}}},A=e(497);const b=(0,A.Z)(g,[["render",w],["__scopeId","data-v-7338a29f"]]);var P=b},3921:function(t,i,e){e.r(i),e.d(i,{default:function(){return C}});var a=e(1831);const c={class:"text-wrap"};function n(t,i,e,n,o,r){const l=(0,a.up)("InfoPageNavbar"),s=(0,a.up)("InfoBannerPic"),v=(0,a.up)("InfoBasic"),u=(0,a.up)("InfoIntroduction"),p=(0,a.up)("InfoTravel"),y=(0,a.up)("MoreActivities"),d=(0,a.up)("VueLoading");return(0,a.wg)(),(0,a.iD)("main",c,[n.tempActivity.ActivityName?((0,a.wg)(),(0,a.j4)(l,{key:0,title:n.tempActivity.ActivityName,backPath:"/activities"},null,8,["title"])):(0,a.kq)("",!0),n.tempActivity.Picture?((0,a.wg)(),(0,a.j4)(s,{key:1,picture:n.tempActivity.Picture},null,8,["picture"])):(0,a.kq)("",!0),(0,a.Wm)(v,{phone:n.tempActivity.Phone,location:n.tempActivity.Address,openTime:n.duration},null,8,["phone","location","openTime"]),(0,a.Wm)(u,{description:n.tempActivity.Description,title:"活動"},null,8,["description"]),(0,a.Wm)(p,{position:n.tempActivity.Position},null,8,["position"]),(0,a.Wm)(y,{nearby:n.nearby,city:n.tempActivity.City},null,8,["nearby","city"]),n.isLoading?((0,a.wg)(),(0,a.j4)(d,{key:2})):(0,a.kq)("",!0)])}var o=e(1222),r=e(5303),l=e(2814),s=e(2552),v=e(6181),u=e(1483),p=e(3668),y=e(3332),d=e(6923);const m={class:"mt-3"},w={class:"text-primary mb-3"},f={class:"overflow-auto d-flex text-nowrap pb-2"};function g(t,i,e,c,n,o){const r=(0,a.up)("Card");return(0,a.wg)(),(0,a.iD)("section",m,[(0,a._)("h6",w,(0,d.zw)(e.city)+"更多活動",1),(0,a._)("ul",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.nearby,(t=>((0,a.wg)(),(0,a.iD)("li",{class:"me-4",key:t.ActivityID},[(0,a.Wm)(r,{class:"card",activity:t},null,8,["activity"])])))),128))])])}var A=e(7512),b={components:{Card:A.Z},props:{nearby:{type:Array,default:()=>[]},city:{type:String,default:()=>""}}},P=e(497);const I=(0,P.Z)(b,[["render",g],["__scopeId","data-v-512bd12e"]]);var h=I,D=e(7125),k={components:{InfoPageNavbar:s.Z,InfoBannerPic:v.Z,InfoBasic:u.Z,InfoIntroduction:p.Z,InfoTravel:y.Z,MoreActivities:h,VueLoading:D.Z},setup(t){const i=(0,r.yj)(),{activityId:e}=i.params,c=(0,o.iH)({}),n=(0,o.iH)(""),s=(0,o.iH)([]),v=(0,o.iH)(!0),u="v2/Tourism/Activity?%24format=JSON";return(0,a.bv)((async()=>{try{const t=await(0,l.Z)(u);c.value=t.filter((t=>t.ActivityID===e))[0];const{StartTime:i,EndTime:a}=c.value,o=new Date(i).toLocaleString().replace("上午12:00:00",""),r=new Date(a).toLocaleString().replace("上午12:00:00","");n.value=`${o} ~ ${r}`;const{PositionLon:p,PositionLat:y}=c.value.Position,d=`v2/Tourism/Activity?%24select=ActivityID%2CActivityName%2CPicture%2CLocation&%24top=5&%24spatialFilter=nearby(${y}%2C%20${p}%2C%2010000)&%24format=JSON`;s.value=await(0,l.Z)(d),v.value=!1}catch(t){console.log("fetch error",t)}})),(0,a.YP)((()=>i.params.activityId),(async t=>{v.value=!0;try{const i=await(0,l.Z)(u);c.value=i.filter((i=>i.ActivityID===t))[0];const{StartTime:e,EndTime:a}=c.value,o=new Date(e).toLocaleString().replace("上午12:00:00",""),r=new Date(a).toLocaleString().replace("上午12:00:00","");n.value=`${o} ~ ${r}`;const{PositionLon:p,PositionLat:y}=c.value.Position,d=`v2/Tourism/Activity?%24select=ActivityID%2CActivityName%2CPicture%2CLocation&%24top=5&%24spatialFilter=nearby(${y}%2C%20${p}%2C%2010000)&%24format=JSON`;s.value=await(0,l.Z)(d),v.value=!1}catch(i){console.log("fetch error",i)}}),{deep:!0}),{tempActivity:c,duration:n,nearby:s,isLoading:v}}};const L=(0,P.Z)(k,[["render",n]]);var C=L}}]);
//# sourceMappingURL=259.6ef768a7.js.map