import{d as I,u as P,i as z,k as $,n as q,o as t,p as c,w as s,a as u,t as l,Z as E,f,b as e,m as R,c as p,e as n,B,C as L,$ as k,X as v,_ as h,s as C,V as y,q as T,F as w,A as S,af as M,r as j,aU as o,aV as V,g as F,h as G,ah as O,ag as A}from"./index-BhGVanJs.js";import{_ as D}from"./BaseCard.vue_vue_type_script_setup_true_lang-DB97wE3d.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-BQNs6tkn.js";const X={class:"tw-mb-6 tw-flex tw-items-start tw-justify-between"},Y=["textContent"],Z={key:0,class:"d-flex align-center mt-4"},H={class:"tw-text-2xl"},J={key:1,class:"d-flex align-center mt-4"},K={class:"text-h6 pr-1"},W={key:0,class:"tw-text-2xl"},tt={key:1,class:"tw-text-2xl"},et={key:2,class:"text-medium-emphasis font-weight-medium ml-2 mt-4"},st={key:3,class:"text-medium-emphasis font-weight-medium ml-1 mt-3"},at=I({__name:"PlansCard",props:{card:{type:Object,required:!0}},setup(i){const{t:a}=P(),m=z(),d=$(!1),b=q(()=>"https://api.mentalcrm.ru");return(N,_)=>{const g=j("QuestionMarkIcon");return t(),c(M,{class:h([{plan__best:i.card.tagtext,plan__shadow:i.card.tagtext},"tw-rounded-md !tw-p-3 !tw-shadow-yellow-300 md:!tw-p-6"]),elevation:"10"},{default:s(()=>[u("div",X,[u("h4",{class:"text-uppercase tw-text-xl tw-font-medium md:tw-text-3xl",textContent:l(i.card.caption)},null,8,Y),i.card.tagtext?(t(),c(E,{key:0,class:"font-weight-bold",size:"x-small",color:"primary"},{default:s(()=>[f(l(e(a)("plans.chipMessage")),1)]),_:1})):R("",!0)]),i.card.free?(t(),p("div",Z,[u("h2",H,l(e(a)("plans.free")),1)])):(t(),p("div",J,[u("sup",K,l(i.card.currency),1),d.value?(t(),p("h2",W,l(i.card.yearlyprice),1)):(t(),p("h2",tt,l(i.card.price),1)),d.value?(t(),p("span",et,l(e(a)("plans.perYear")),1)):(t(),p("span",st,l(e(a)("plans.perMonth")),1))])),n(S,{class:"mb-0 bg-none pl-0 pt-5"},{default:s(()=>[(t(!0),p(w,null,B(i.card.list,r=>(t(),c(L,{key:e(a)(r.listtitle),class:"px-0"},{default:s(()=>[r.status?(t(),c(k,{key:0,class:"text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"},{default:s(()=>[(t(),c(v(r.icon),{class:h([`text-${r.iconcolor}`,"tw-mr-4 tw-min-w-4"]),size:"16","stroke-width":"2"},null,8,["class"])),f(" "+l(e(a)(r.listtitle))+" ",1),n(C,{text:e(a)(r.tooltip)},{activator:s(({props:x})=>[n(y,T({ref_for:!0},x,{class:"tw-scale-75",size:"x-small",color:"primary",variant:"tonal",icon:""}),{default:s(()=>[n(g)]),_:2},1040)]),_:2},1032,["text"])]),_:2},1024)):(t(),c(k,{key:1,class:"text-body-1 d-flex align-center font-weight-medium"},{default:s(()=>[(t(),c(v(r.icon),{class:h([`text-${r.iconcolor}`,"tw-mr-4 tw-min-w-4"]),size:"16","stroke-width":"2"},null,8,["class"])),f(" "+l(e(a)(r.listtitle))+" ",1),n(C,{text:e(a)(r.tooltip)},{activator:s(({props:x})=>[n(y,T({ref_for:!0},x,{class:"tw-scale-75",size:"x-small",color:"primary",variant:"tonal",icon:""}),{default:s(()=>[n(g)]),_:2},1040)]),_:2},1032,["text"])]),_:2},1024))]),_:2},1024))),128))]),_:1}),u("div",null,[e(m).user.subscription===i.card.type?(t(),c(y,{key:0,class:"tw-mb-2 tw-mt-6",size:"large",color:"primary",flat:"",block:"",disabled:""},{default:s(()=>[f(l(e(a)("plans.yourPlan")),1)]),_:1})):(t(),c(y,{key:1,href:`${b.value}/api/subscription/subscribe`,disabled:e(m).user.subscription!=="BEGINNER",size:"large",class:"tw-mb-2 tw-mt-6",color:"primary",flat:"",block:""},{default:s(()=>[f(l(e(a)("plans.select")),1)]),_:1},8,["href","disabled"]))])]),_:1},8,["class"])}}}),lt=Q(at,[["__scopeId","data-v-ffe8c6e1"]]),ot=[{type:"BEGINNER",available:!1,tagtext:!1,caption:"Beginner",free:!0,price:10.99,yearlyprice:10.99*12,currency:"₽",buttontext:"Choose Silver",list:[{icon:o,iconcolor:"primary",listtitle:"plans.clients",tooltip:"plans.clientsTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.notes",tooltip:"plans.notesTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.email",tooltip:"plans.emailTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.video",tooltip:"plans.videoTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.billing",tooltip:"plans.billingTooltip",status:!1},{icon:V,iconcolor:"error",listtitle:"plans.assistant",tooltip:"plans.assistantTooltip",status:!0},{icon:V,iconcolor:"error",listtitle:"plans.features",tooltip:"plans.featuresTooltip",status:!0}]},{type:"PROFESSIONAL",tagtext:!0,available:!0,caption:"unlimited",free:!1,price:1490,currency:"₽",yearlyprice:1490*12,buttontext:"Choose Gold",list:[{icon:o,iconcolor:"primary",listtitle:"plans.clientsProfessional",tooltip:"plans.clientsTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.notes",tooltip:"plans.notesTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.email",tooltip:"plans.emailTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.video",tooltip:"plans.videoTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.billing",tooltip:"plans.billingTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.assistant",tooltip:"plans.assistantTooltip",status:!1},{icon:o,iconcolor:"primary",listtitle:"plans.features",tooltip:"plans.featuresTooltip",status:!1}]}],it={class:"text-h2 tw-mb-6 tw-pt-2 tw-text-center md:tw-mb-12 md:tw-pt-6"},ut=I({__name:"Plans",setup(i){const{t:a}=P(),m=F(),d=G();return m.query.success==="true"&&d.push({name:"Confirm Payment",query:{paymentProcessing:"true"}}),m.query.success==="false"&&d.push({name:"Confirm Payment",query:{paymentProcessing:"false"}}),(b,N)=>(t(),p(w,null,[n(U,{title:"sidebar.plans"}),n(D,null,{default:s(()=>[u("h2",it,l(e(a)("plans.title")),1),n(O,{class:"d-flex justify-center"},{default:s(()=>[(t(!0),p(w,null,B(e(ot),_=>(t(),c(A,{key:_.caption,cols:"12",md:"6"},{default:s(()=>[n(lt,{card:_},null,8,["card"])]),_:2},1024))),128))]),_:1})]),_:1})],64))}});export{ut as default};