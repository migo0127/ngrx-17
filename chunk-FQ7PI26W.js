import{d as U,e as N}from"./chunk-4AML2UEQ.js";import{A as M,E as h,F as _,N as b,S as q,U as z,V as J,W as K,aa as G,ca as y,da as Q,ea as W,k as L,l as V,m as H,y as w,z as R}from"./chunk-UCS4EAVF.js";import{Aa as C,Ba as v,Cb as r,Db as E,Eb as B,Fb as O,Hb as S,Ib as T,Jb as d,Kb as u,Sa as s,Ta as p,f as $,hb as g,jb as P,kc as j,nb as I,ob as o,pa as x,pb as l,qb as k,rb as D,tb as f,ub as m}from"./chunk-Z4HVJDSC.js";function it(i,n){if(i&1&&(o(0,"p")(1,"span"),r(2),d(3,"async"),l(),o(4,"span"),r(5),l(),o(6,"span"),r(7),d(8,"async"),l()()),i&2){let c,e,t=m();s(2),O("","Hi "," ",(c=u(3,5,t.userInfo$))==null?null:c.userName,""),s(3),E("\u3001"),s(2),O("","Level: ","",(e=u(8,7,t.userInfo$))==null?null:e.level,"")}}function nt(i,n){if(i&1&&(o(0,"p"),r(1),d(2,"async"),d(3,"timeFormat"),l()),i&2){let c=m();s(),E(u(3,3,u(2,1,c.globalIdleSec$)))}}var X=(()=>{let n=class n{constructor(e,t,a){this.store=e,this.storeAuto=t,this.storeUserInfo=a}ngOnInit(){this.globalIdleSec$=this.store.pipe(_(G)),this.userInfo$=this.storeUserInfo.pipe(_(N))}logout(){this.storeAuto.dispatch(U())}};n.\u0275fac=function(t){return new(t||n)(p(h),p(h),p(h))},n.\u0275cmp=x({type:n,selectors:[["app-header"]],standalone:!0,features:[S],decls:6,vars:2,consts:[["mat-button","",3,"click"]],template:function(t,a){t&1&&(o(0,"section"),g(1,it,9,9,"p"),o(2,"div"),g(3,nt,4,5,"p"),o(4,"button",0),f("click",function(){return a.logout()}),r(5,"Logout"),l()()()),t&2&&(s(),I(1,a.userInfo$?1:-1),s(2),I(3,a.globalIdleSec$?3:-1))},dependencies:[j,y,M,w],styles:["section[_ngcontent-%COMP%]{height:4vh;min-height:45px;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:.25rem 1.5rem;background-color:#87ceeb}section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5%;min-width:max-content;display:flex;justify-content:space-between;align-items:center}section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem;color:#fff}"]});let i=n;return i})();var ot=()=>["/pages/home"],rt=()=>["/pages/products"];function lt(i,n){if(i&1){let c=D();o(0,"div",2)(1,"p"),r(2),d(3,"timeFormat"),l(),o(4,"div")(5,"button",3),f("click",function(){C(c);let t=m();return v(t.pauseGlobalIdle())}),r(6,"Pause Global Idle"),l(),r(7," \xA0 "),o(8,"button",3),f("click",function(){C(c);let t=m();return v(t.continueGlobalIdle())}),r(9,"Continue Global Idle"),l(),r(10," \xA0 "),o(11,"button",3),f("click",function(){C(c);let t=m();return v(t.restartGlobalIdle())}),r(12,"Restart Global Idle"),l()()()}if(i&2){let c=m();s(2),B("Global Idle in PagesComponent\uFF1A",u(3,1,c.globIdleSec),"")}}var Y=(()=>{let n=class n{constructor(e,t,a){this.router=e,this.dialog=t,this.store=a,this.subscription=null}ngOnInit(){this.startGlobalIdle()}detectClickEvent(){document.body.addEventListener("click",()=>{this.startGlobalIdle()})}startGlobalIdle(){if(this.subscription===null){let e={warningSec:b.warningSec,timeoutSec:b.timeoutSec};this.store.dispatch(q({configGlobalIdleConfig:e})),this.globIdleSec$=this.store.pipe(_(G)),this.subscription=new $,this.subscription.add(this.globIdleSec$.subscribe(t=>{this.globIdleSec=t;let a=Math.floor(b.timeoutSec/60),F=Math.floor(b.warningSec/60);if(t===0){let A=`\u60A8\u7684\u9592\u7F6E\u6642\u9593\u5DF2\u8D85\u904E ${a} \u5206\u9418\uFF0C\u7CFB\u7D71\u5DF2\u5C07\u60A8\u767B\u51FA-pages\u3002`;this.showDialog(A).subscribe(()=>{this.unsubscribe(),this.router.navigate(["/login"])})}else if(t===b.warningSec){console.log("GlobIdleConfig warning");let A=`\u60A8\u7684\u9592\u7F6E\u6642\u9593\u5DF2\u8D85\u904E ${F} \u5206\u9418\uFF0C\u82E5\u8981\u7E7C\u7E8C\u4F7F\u7528\uFF0C\u8ACB\u9EDE\u64CA\u78BA\u8A8D\u3002`;this.showDialog(A).subscribe(()=>{this.startGlobalIdle()})}}))}else this.unsubscribe(),this.startGlobalIdle()}pauseGlobalIdle(){this.store.dispatch(z())}continueGlobalIdle(){this.store.dispatch(J())}restartGlobalIdle(){this.startGlobalIdle()}showDialog(e){return this.dialog.open(W,{data:{content:e}}).afterClosed()}unsubscribe(){this.store.dispatch(K()),this.subscription?.unsubscribe(),this.subscription=null}ngOnDestroy(){this.unsubscribe()}};n.\u0275fac=function(t){return new(t||n)(p(V),p(Q),p(h))},n.\u0275cmp=x({type:n,selectors:[["app-pages"]],standalone:!0,features:[S],decls:11,vars:5,consts:[[1,"outlet-wrap"],["mat-stroked-button","","routerLinkActive","active",3,"routerLink"],[1,"idle"],["button","","mat-raised-button","",3,"click"]],template:function(t,a){t&1&&(o(0,"section"),k(1,"app-header"),l(),o(2,"section",0)(3,"div")(4,"a",1),r(5,"home"),l(),r(6," \xA0 "),o(7,"a",1),r(8,"products"),l()(),g(9,lt,13,3,"div",2),k(10,"router-outlet"),l()),t&2&&(s(4),P("routerLink",T(3,ot)),s(3),P("routerLink",T(4,rt)),s(2),I(9,a.globIdleSec>=0?9:-1))},dependencies:[L,H,X,y,M,R,w],styles:[".outlet-wrap[_ngcontent-%COMP%]{padding:1rem}.outlet-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1rem 0}"]});let i=n;return i})();var kt=[{path:"",component:Y,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-PI3F6MYG.js")},{path:"products",loadComponent:()=>import("./chunk-TNYT6Y2C.js")},{path:"**",redirectTo:"home"}]}];export{kt as pagesRoutes};