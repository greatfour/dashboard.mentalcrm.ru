import{h as l}from"./moment-zH0z38ay.js";import{_ as M}from"./BaseLoader.vue_vue_type_script_setup_true_lang-BuXkbLdx.js";import{_ as S}from"./ChartWidget.vue_vue_type_script_setup_true_lang-C0n6zFoo.js";import{_ as k,a as D}from"./SessionsWidget.vue_vue_type_script_setup_true_lang-DkA69Fhm.js";import{_ as O}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-BQNs6tkn.js";import{ar as R,as as w,d as K,u as B,k as p,n as m,at as C,H as y,o as F,c as $,e,w as n,ah as A,ag as h,b as d,F as z}from"./index-BhGVanJs.js";import{u as H}from"./Billing-DiisA35z.js";import{u as I}from"./Sessions-BbabeFQp.js";import"./BaseCard.vue_vue_type_script_setup_true_lang-DB97wE3d.js";const L=R({id:"Dashboard",state:()=>({chartClients:[],chartSessions:[]}),actions:{async getClientChart(u={}){const{data:s}=await w.get("api/therapist/clients/chart",{params:u});return this.chartClients=s,s},async getSessionsChart(u={}){const{data:s}=await w.get("api/therapist/sessions/chart",{params:u});return this.chartSessions=s,s}}}),X=K({__name:"Dashboard",setup(u){const{t:s}=B(),a=L(),f=H(),g=I(),c=p(!0),b=p(!1),v=p(!1),i=p("WEEK"),r=p("WEEK"),E=m(()=>({series:[{name:s("dashboard.clients"),data:a.chartClients.map(t=>t.newClients)}]})),U=m(()=>({series:[{name:s("dashboard.sessions"),data:a.chartSessions.map(t=>t.sessionsCount)}]})),x=m(()=>({chart:{type:"bar",height:350,fontFamily:"inherit",toolbar:{show:!1},animations:{enabled:!1}},colors:[C.colors.primary,C.colors.lightprimary],plotOptions:{bar:{borderRadius:3,borderRadiusWhenStacked:"both",borderRadiusApplication:"start",horizontal:!1,endingShape:"rounded",columnWidth:"20%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},labels:{formatter(t){return t.toFixed(0)}},xaxis:{categories:i.value==="WEEK"?a.chartClients.map(t=>l(t.date).format("DD.MM")):a.chartClients.map(t=>l(t.date).format("MMMM"))},fill:{opacity:1},tooltip:{theme:"dark"},legend:{show:!0,position:"bottom",width:"50px"},responsive:[{breakpoint:600,options:{yaxis:{show:!1}}}]})),W=m(()=>({chart:{type:"bar",height:350,fontFamily:"inherit",toolbar:{show:!1},animations:{enabled:!1}},colors:[C.colors.primary],plotOptions:{bar:{borderRadius:3,borderRadiusWhenStacked:"both",borderRadiusApplication:"start",horizontal:!1,endingShape:"rounded",columnWidth:"20%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},labels:{formatter(t){return t.toFixed(0)}},xaxis:{categories:r.value==="WEEK"?a.chartSessions.map(t=>l(t.date).format("DD.MM")):a.chartSessions.map(t=>l(t.date).format("MMMM"))},fill:{opacity:1},tooltip:{theme:"dark"},legend:{show:!0,position:"bottom",width:"50px"},responsive:[{breakpoint:600,options:{yaxis:{show:!1}}}]}));return y(i,async(t,o)=>{t?(b.value=!0,await a.getClientChart({period:t}),b.value=!1):o?i.value=o:i.value="WEEK"},{immediate:!0}),y(r,async(t,o)=>{t?(v.value=!0,await a.getSessionsChart({period:t}),v.value=!1):o?r.value=o:r.value="WEEK"},{immediate:!0}),Promise.all([a.getClientChart({period:i.value}),a.getSessionsChart({period:r.value}),f.getBilling({limit:3}),g.getSessions({from:l().startOf("day").valueOf(),to:l().endOf("day").valueOf(),limit:3,status:["BOOKED"]})]).then(()=>{c.value=!1}),(t,o)=>(F(),$(z,null,[e(O,{title:"sidebar.dashboard"}),e(M,{isUpdate:c.value},{default:n(()=>[e(A,null,{default:n(()=>[e(h,{cols:"12",md:"6"},{default:n(()=>[e(k,{total:d(g).total,sessions:d(g).list,icon:""},null,8,["total","sessions"])]),_:1}),e(h,{cols:"12",md:"6"},{default:n(()=>[e(D,{total:d(f).total,payments:d(f).list,icon:""},null,8,["total","payments"])]),_:1}),e(h,{cols:"12",md:"6"},{default:n(()=>[e(S,{toggle:i.value,"onUpdate:toggle":o[0]||(o[0]=_=>i.value=_),title:d(s)("dashboard.clients"),series:E.value.series,options:x.value,isUpdate:c.value,isUpdateWidget:b.value},null,8,["toggle","title","series","options","isUpdate","isUpdateWidget"])]),_:1}),e(h,{cols:"12",md:"6"},{default:n(()=>[e(S,{toggle:r.value,"onUpdate:toggle":o[1]||(o[1]=_=>r.value=_),title:d(s)("dashboard.sessions"),series:U.value.series,options:W.value,isUpdate:c.value,isUpdateWidget:v.value},null,8,["toggle","title","series","options","isUpdate","isUpdateWidget"])]),_:1})]),_:1})]),_:1},8,["isUpdate"])],64))}});export{X as default};