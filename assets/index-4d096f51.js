import{u as f,E as I,c as V,_ as h,w as C,a as b,b as F}from"./file-88daef97.js";import{u as A,a as P,t as z}from"./el-select-f5735396.js";import{s as S,r as R,o as x,d as r,c as g,a as p,b as q,w as k,u as e,e as _,n as $,f as i,g as O,h as v,i as d,j,T as L,k as D,_ as G,l as J,m as K,p as Q,q as w,t as U,v as W}from"./index-c6836771.js";const X="/assets/logo-a20d0965.png",Y={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},Z={click:n=>n instanceof MouseEvent},ee=(n,o,s)=>{const t=S(),a=S(),l=R(!1),c=()=>{t.value&&(l.value=t.value.scrollTop>=n.visibilityHeight)},u=m=>{var E;(E=t.value)==null||E.scrollTo({top:0,behavior:"smooth"}),o("click",m)},y=A(c,300,!0);return P(a,"scroll",y),x(()=>{var m;a.value=document,t.value=document.documentElement,n.target&&(t.value=(m=document.querySelector(n.target))!=null?m:void 0,t.value||z(s,`target does not exist: ${n.target}`),a.value=t.value),c()}),{visible:l,handleClick:u}},N="ElBacktop",te=r({name:N}),se=r({...te,props:Y,emits:Z,setup(n,{emit:o}){const s=n,t=f("backtop"),{handleClick:a,visible:l}=ee(s,o,N),c=g(()=>({right:`${s.right}px`,bottom:`${s.bottom}px`}));return(u,y)=>(p(),q(L,{name:`${e(t).namespace.value}-fade-in`},{default:k(()=>[e(l)?(p(),_("div",{key:0,style:$(e(c)),class:i(e(t).b()),onClick:y[0]||(y[0]=O((...m)=>e(a)&&e(a)(...m),["stop"]))},[v(u.$slots,"default",{},()=>[d(e(I),{class:i(e(t).e("icon"))},{default:k(()=>[d(e(V))]),_:1},8,["class"])])],6)):j("v-if",!0)]),_:3},8,["name"]))}});var ne=h(se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const oe=C(ne),ae=r({name:"ElContainer"}),le=r({...ae,props:{direction:{type:String}},setup(n){const o=n,s=D(),t=f("container"),a=g(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:s&&s.default?s.default().some(c=>{const u=c.type.name;return u==="ElHeader"||u==="ElFooter"}):!1);return(l,c)=>(p(),_("section",{class:i([e(t).b(),e(t).is("vertical",e(a))])},[v(l.$slots,"default")],2))}});var re=h(le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const ce=r({name:"ElAside"}),ie=r({...ce,props:{width:{type:String,default:null}},setup(n){const o=n,s=f("aside"),t=g(()=>o.width?s.cssVarBlock({width:o.width}):{});return(a,l)=>(p(),_("aside",{class:i(e(s).b()),style:$(e(t))},[v(a.$slots,"default")],6))}});var B=h(ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const ue=r({name:"ElFooter"}),pe=r({...ue,props:{height:{type:String,default:null}},setup(n){const o=n,s=f("footer"),t=g(()=>o.height?s.cssVarBlock({height:o.height}):{});return(a,l)=>(p(),_("footer",{class:i(e(s).b()),style:$(e(t))},[v(a.$slots,"default")],6))}});var M=h(pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const de=r({name:"ElHeader"}),_e=r({...de,props:{height:{type:String,default:null}},setup(n){const o=n,s=f("header"),t=g(()=>o.height?s.cssVarBlock({height:o.height}):{});return(a,l)=>(p(),_("header",{class:i(e(s).b()),style:$(e(t))},[v(a.$slots,"default")],6))}});var T=h(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const me=r({name:"ElMain"}),fe=r({...me,setup(n){const o=f("main");return(s,t)=>(p(),_("main",{class:i(e(o).b())},[v(s.$slots,"default")],2))}});var H=h(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const he=C(re,{Aside:B,Footer:M,Header:T,Main:H});b(B);b(M);const ve=b(T),ke=b(H);const ge=n=>(U("data-v-a882a4f3"),n=n(),W(),n),ye=ge(()=>w("img",{src:X,alt:""},null,-1)),be={__name:"index",setup(n){F();const o=J(),s=K(),t=a=>{a=="lean"?o.push({name:"lean"}):o.push({name:"level"})};return x(()=>{}),(a,l)=>{const c=Q("router-view");return p(),_("div",null,[d(e(he),{style:{width:"100vw"}},{default:k(()=>[d(e(ve),{class:"header",style:{display:"flex"}},{default:k(()=>[ye,w("div",{onClick:l[0]||(l[0]=u=>t("lean")),class:i(e(s).fullPath=="/lean"?"active":"")},"学习",2),w("div",{onClick:l[1]||(l[1]=u=>t("level")),class:i(e(s).fullPath=="/level"?"active":"")},"关卡",2)]),_:1}),d(e(ke),null,{default:k(()=>[d(c)]),_:1})]),_:1}),d(e(oe),{right:40,bottom:100})])}}},Se=G(be,[["__scopeId","data-v-a882a4f3"]]);export{Se as default};
