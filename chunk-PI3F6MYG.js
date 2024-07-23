import{$ as N,A as B,E as R,F as v,O as h,P as I,X as k,Z as M,_ as V,ba as T,ca as P,da as O,ea as q,l as y,y as j}from"./chunk-UCS4EAVF.js";import{Aa as u,Ba as d,Cb as i,Eb as w,Ha as E,Hb as $,Jb as H,Kb as A,Sa as S,Ta as b,f as _,hb as f,nb as C,ob as s,pa as D,pb as r,qb as F,rb as x,tb as p,ub as c}from"./chunk-Z4HVJDSC.js";function z(o,l){if(o&1){let n=x();s(0,"section")(1,"p"),i(2),H(3,"timeFormat"),r(),s(4,"div")(5,"button",0),p("click",function(){u(n);let e=c();return d(e.pauseHomeIdle())}),i(6,"Pause Home Idle"),r(),i(7," \xA0 "),s(8,"button",0),p("click",function(){u(n);let e=c();return d(e.continueHomeIdle())}),i(9,"Continue Home Idle"),r(),i(10," \xA0 "),s(11,"button",0),p("click",function(){u(n);let e=c();return d(e.restartHomeIdle())}),i(12,"Restart Home Idle"),r()()()}if(o&2){let n=c();S(2),w("Single Idle in HomeComponent\uFF1A",A(3,1,n.homeIdleSec),"")}}function G(o,l){if(o&1){let n=x();s(0,"section")(1,"p"),i(2),H(3,"timeFormat"),r(),s(4,"div")(5,"button",1),p("click",function(){u(n);let e=c();return d(e.pauseHomeIdle2())}),i(6,"Pause Home Idle 2"),r(),i(7," \xA0 "),s(8,"button",1),p("click",function(){u(n);let e=c();return d(e.continueHomeIdle2())}),i(9,"Continue Home Idle 2"),r(),i(10," \xA0 "),s(11,"button",1),p("click",function(){u(n);let e=c();return d(e.restartHomeIdle2())}),i(12,"Restart Home Idle 2"),r()()()}if(o&2){let n=c();S(2),w("Single Idle in HomeComponent 2\uFF1A",A(3,1,n.homeIdleSec2),"")}}var oe=(()=>{let l=class l{constructor(t,e,m,g){this.router=t,this.dialog=e,this.ref=m,this.store=g,this.subscription=null,this.componentName="homeComponent",this.subscription2=null,this.componentName2="homeComponent2"}ngOnInit(){this.startSingleIdle(),this.startSingleIdle2()}startSingleIdle(){if(this.subscription===null){let t={warningSec:h.warningSec,timeoutSec:h.timeoutSec};this.store.dispatch(k({component:this.componentName,configSingleIdleConfig:t})),this.homeIdleSec$=this.store.pipe(v(T(this.componentName))),this.subscription=new _,this.subscription.add(this.homeIdleSec$.subscribe(e=>{this.homeIdleSec=e;let m=Math.floor(h.timeoutSec/60),g=Math.floor(h.warningSec/60);if(e===0){let a=`\u60A8\u7684\u9592\u7F6E\u6642\u9593\u5DF2\u8D85\u904E ${m} \u5206\u9418\uFF0C\u7CFB\u7D71\u5DF2\u5C07\u60A8\u767B\u51FA-home\u3002`;this.showDialog(a).subscribe(()=>{this.unsubscribe(),this.router.navigate(["/login"])})}else if(e===h.warningSec){console.log("HomeIdleConfig warning");let a=`\u60A8\u7684\u9592\u7F6E\u6642\u9593\u5DF2\u8D85\u904E ${g} \u5206\u9418\uFF0C\u82E5\u8981\u7E7C\u7E8C\u4F7F\u7528\uFF0C\u8ACB\u9EDE\u64CA\u78BA\u8A8D\u3002`;this.showDialog(a).subscribe(()=>{this.startSingleIdle()})}}))}else this.unsubscribe(),this.startSingleIdle()}pauseHomeIdle(){this.store.dispatch(M({component:this.componentName}))}continueHomeIdle(){this.store.dispatch(V({component:this.componentName}))}restartHomeIdle(){this.startSingleIdle()}unsubscribe(){this.store.dispatch(N({component:this.componentName})),this.subscription?.unsubscribe(),this.subscription=null}startSingleIdle2(){if(this.subscription2===null){let t={warningSec:I.warningSec,timeoutSec:I.timeoutSec};this.store.dispatch(k({component:this.componentName2,configSingleIdleConfig:t})),this.homeIdleSec2$=this.store.pipe(v(T(this.componentName2))),this.subscription2=new _,this.subscription2.add(this.homeIdleSec2$.subscribe(e=>{this.homeIdleSec2=e;let m=Math.floor(I.timeoutSec/60),g=Math.floor(I.warningSec/60);if(e===0){let a=`\u60A8\u7684\u9592\u7F6E\u6642\u9593\u5DF2\u8D85\u904E ${m} \u5206\u9418\uFF0C\u7CFB\u7D71\u5DF2\u5C07\u60A8\u767B\u51FA-home\u3002`;this.showDialog(a).subscribe(()=>{this.unsubscribe(),this.router.navigate(["/login"])})}else if(e===I.warningSec){console.log("HomeIdleConfig2 warning");let a=`\u60A8\u7684\u9592\u7F6E\u6642\u9593\u5DF2\u8D85\u904E ${g} \u5206\u9418\uFF0C\u82E5\u8981\u7E7C\u7E8C\u4F7F\u7528\uFF0C\u8ACB\u9EDE\u64CA\u78BA\u8A8D\u3002`;this.showDialog(a).subscribe(()=>{this.startSingleIdle2()})}}))}else this.unsubscribe2(),this.startSingleIdle2()}pauseHomeIdle2(){this.store.dispatch(M({component:this.componentName2}))}continueHomeIdle2(){this.store.dispatch(V({component:this.componentName2}))}restartHomeIdle2(){this.startSingleIdle2()}unsubscribe2(){this.store.dispatch(N({component:this.componentName2})),this.subscription2?.unsubscribe(),this.subscription2=null}showDialog(t){return this.dialog.open(q,{data:{content:t}}).afterClosed()}ngOnDestroy(){this.unsubscribe(),this.unsubscribe2()}};l.\u0275fac=function(e){return new(e||l)(b(y),b(O),b(E),b(R))},l.\u0275cmp=D({type:l,selectors:[["app-home"]],standalone:!0,features:[$],decls:3,vars:2,consts:[["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,m){e&1&&(f(0,z,13,3,"section"),F(1,"br"),f(2,G,13,3,"section")),e&2&&(C(0,m.homeIdleSec>=0?0:-1),S(2),C(2,m.homeIdleSec2>=0?2:-1))},dependencies:[P,B,j]});let o=l;return o})();export{oe as default};