"use strict";(self.webpackChunksoccer_tracker=self.webpackChunksoccer_tracker||[]).push([[247],{8292:(se,O,h)=>{h.d(O,{K:()=>n});class n{GetApiHeaders(){return{"x-apisports-key":"d38eefd99d2a343db3764073b8078596"}}}},3277:(se,O,h)=>{h.d(O,{a:()=>B});var p=h(6814),n=h(9862),C=h(9291);let B=(()=>{class M{static#e=this.\u0275fac=function(_){return new(_||M)};static#t=this.\u0275mod=C.oAB({type:M});static#s=this.\u0275inj=C.cJS({imports:[p.ez,n.JF]})}return M})()},9247:(se,O,h)=>{h.r(O),h.d(O,{CountryResultsModule:()=>Xe});var p=h(6814),n=h(9291),C=h(6913);let B=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275cmp=n.Xpm({type:i,selectors:[["app-country-results"]],decls:1,vars:0,template:function(a,m){1&a&&n._UZ(0,"router-outlet")},dependencies:[C.lC],encapsulation:2})}return i})();var M=h(3277),ge=h(9397),A=h(7398),_=h(3020),K=h(2096),q=h(2181),Z=h(6306),X=h(7394);class w extends X.w0{constructor(c,o){super()}schedule(c,o=0){return this}}const V={setInterval(i,c,...o){const{delegate:a}=V;return a?.setInterval?a.setInterval(i,c,...o):setInterval(i,c,...o)},clearInterval(i){const{delegate:c}=V;return(c?.clearInterval||clearInterval)(i)},delegate:void 0};var ve=h(9039);const Y={now:()=>(Y.delegate||Date).now(),delegate:void 0};class F{constructor(c,o=F.now){this.schedulerActionCtor=c,this.now=o}schedule(c,o=0,a){return new this.schedulerActionCtor(this,c).schedule(a,o)}}F.now=Y.now;const U=new class ne extends F{constructor(c,o=F.now){super(c,o),this.actions=[],this._active=!1}flush(c){const{actions:o}=this;if(this._active)return void o.push(c);let a;this._active=!0;do{if(a=c.execute(c.state,c.delay))break}while(c=o.shift());if(this._active=!1,a){for(;c=o.shift();)c.unsubscribe();throw a}}}(class Te extends w{constructor(c,o){super(c,o),this.scheduler=c,this.work=o,this.pending=!1}schedule(c,o=0){var a;if(this.closed)return this;this.state=c;const m=this.id,y=this.scheduler;return null!=m&&(this.id=this.recycleAsyncId(y,m,o)),this.pending=!0,this.delay=o,this.id=null!==(a=this.id)&&void 0!==a?a:this.requestAsyncId(y,this.id,o),this}requestAsyncId(c,o,a=0){return V.setInterval(c.flush.bind(c,this),a)}recycleAsyncId(c,o,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return o;null!=o&&V.clearInterval(o)}execute(c,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(c,o);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(c,o){let m,a=!1;try{this.work(c)}catch(y){a=!0,m=y||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),m}unsubscribe(){if(!this.closed){const{id:c,scheduler:o}=this,{actions:a}=o;this.work=this.state=this.scheduler=null,this.pending=!1,(0,ve.P)(a,this),null!=c&&(this.id=this.recycleAsyncId(o,c,null)),this.delay=null,super.unsubscribe()}}}),S=U;var _e=h(5211),re=h(8180),Ee=h(9360),oe=h(8251),ie=h(2420),Ce=h(975),H=h(1631),I=h(4829);function z(i,c){return c?o=>(0,_e.z)(c.pipe((0,re.q)(1),function ae(){return(0,Ee.e)((i,c)=>{i.subscribe((0,oe.x)(c,ie.Z))})}()),o.pipe(z(i))):(0,H.z)((o,a)=>(0,I.Xf)(i(o,a)).pipe((0,re.q)(1),(0,Ce.h)(o)))}var Q=h(5592),D=h(671);var be=h(7921);const ue=(0,K.of)("not yet loaded");function Re(i){return"loading"!==i&&"not yet loaded"!==i&&"error"!==i}function Fe(i){return i.pipe((0,A.U)(c=>function de(i){return!Re(i)}(c)?c:"loaded"))}function he(i){return i.pipe((0,q.h)(Re))}function Ue(i){return i.pipe((0,Z.K)(()=>(0,K.of)("error")),function le(i,c=U){const o=function ee(i=0,c,o=S){let a=-1;return null!=c&&((0,D.K)(c)?o=c:a=c),new Q.y(m=>{let y=function ce(i){return i instanceof Date&&!isNaN(i)}(i)?+i-o.now():i;y<0&&(y=0);let b=0;return o.schedule(function(){m.closed||(m.next(b++),0<=a?this.schedule(void 0,a):m.complete())},y)})}(i,c);return z(()=>o)}(1500),(0,be.O)("loading"))}var pe=h(8292);var Pe=h(9862);let L=(()=>{class i extends pe.K{constructor(o){super(),this.http=o}GetTopLeague(o){switch(o){case"england":return{name:"Premier League",id:39};case"germany":return{name:"Bundesliga",id:78};case"france":return{name:"Ligue 1",id:61};case"spain":return{name:"La Liga",id:140};case"italy":return{name:"Serie A",id:135};default:return null}}GetCurrentSeason(){const o=new Date,a=o.getFullYear();return o.getMonth()<=6?a-1:a}GetAllTeamResults(o,a){return this.http.get("https://v3.football.api-sports.io/standings",{headers:super.GetApiHeaders(),params:{league:o.id,season:a}}).pipe((0,ge.b)(()=>{console.log("requesting",o,a)}),(0,A.U)(y=>function we(i){return i&&i.length?i[0]:void 0}(y.response)?.league?.standings.flat()??[]),(0,A.U)(y=>y.map(b=>this.GetTeamResult(b))),Ue,(0,_.B)())}GetTeamResult(o){return{teamId:o.team.id,teamName:o.team.name,teamLogo:o.team.logo,points:o.points,goalDifference:o.goalsDiff,draws:o.all.draw,games:o.all.played,wins:o.all.win,losses:o.all.lose}}static#e=this.\u0275fac=function(a){return new(a||i)(n.LFG(Pe.eN))};static#t=this.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac})}return i})();var $=h(4366),Ae=h(4664),fe=h(8645);class He extends fe.x{constructor(c=1/0,o=1/0,a=Y){super(),this._bufferSize=c,this._windowTime=o,this._timestampProvider=a,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=o===1/0,this._bufferSize=Math.max(1,c),this._windowTime=Math.max(1,o)}next(c){const{isStopped:o,_buffer:a,_infiniteTimeWindow:m,_timestampProvider:y,_windowTime:b}=this;o||(a.push(c),!m&&a.push(y.now()+b)),this._trimBuffer(),super.next(c)}_subscribe(c){this._throwIfClosed(),this._trimBuffer();const o=this._innerSubscribe(c),{_infiniteTimeWindow:a,_buffer:m}=this,y=m.slice();for(let b=0;b<y.length&&!c.closed;b+=a?1:2)c.next(y[b]);return this._checkFinalizedStatuses(c),o}_trimBuffer(){const{_bufferSize:c,_timestampProvider:o,_buffer:a,_infiniteTimeWindow:m}=this,y=(m?1:2)*c;if(c<1/0&&y<a.length&&a.splice(0,a.length-y),!m){const b=o.now();let W=0;for(let k=1;k<a.length&&a[k]<=b;k+=2)W=k;W&&a.splice(0,W+1)}}}const je=function(i,c,o){return["/country",i,"team",c,o]};function Je(i,c){if(1&i&&(n.TgZ(0,"tr")(1,"td"),n._UZ(2,"img",16),n.qZA(),n.TgZ(3,"td")(4,"a",17),n.ALo(5,"async"),n._uU(6),n.qZA()(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.TgZ(11,"td"),n._uU(12),n.qZA(),n.TgZ(13,"td"),n._uU(14),n.qZA(),n.TgZ(15,"td"),n._uU(16),n.qZA(),n.TgZ(17,"td"),n._uU(18),n.qZA()()),2&i){const o=c.$implicit,a=n.oxw(2);n.xp6(2),n.Q6J("src",o.teamLogo,n.LSH),n.xp6(2),n.Q6J("routerLink",n.kEZ(11,je,n.lcZ(5,9,a.selectedCountry$),o.teamId,o.teamName)),n.xp6(2),n.Oqu(o.teamName),n.xp6(2),n.Oqu(o.games),n.xp6(2),n.Oqu(o.wins),n.xp6(2),n.Oqu(o.losses),n.xp6(2),n.Oqu(o.draws),n.xp6(2),n.Oqu(o.goalDifference),n.xp6(2),n.Oqu(o.points)}}function Be(i,c){if(1&i&&(n.TgZ(0,"table",9)(1,"thead")(2,"tr"),n._UZ(3,"th"),n.TgZ(4,"th",10),n._uU(5,"Name"),n.qZA(),n.TgZ(6,"th",11),n._uU(7,"Games"),n.qZA(),n.TgZ(8,"th",12),n._uU(9,"W"),n.qZA(),n.TgZ(10,"th",13),n._uU(11,"L"),n.qZA(),n.TgZ(12,"th",14),n._uU(13,"D"),n.qZA(),n.TgZ(14,"th"),n._uU(15,"Goal difference"),n.qZA(),n.TgZ(16,"th"),n._uU(17,"Points"),n.qZA()()(),n.TgZ(18,"tbody"),n.YNc(19,Je,19,15,"tr",15),n.ALo(20,"async"),n.qZA()()),2&i){const o=n.oxw();n.xp6(19),n.Q6J("ngForOf",n.lcZ(20,1,o.leagueResults$))}}function Ze(i,c){1&i&&(n.TgZ(0,"div")(1,"span",18),n._uU(2,"We are waiting for the results..."),n.qZA(),n.TgZ(3,"div",19)(4,"span",20),n._uU(5,"Loading..."),n.qZA()()())}function Oe(i,c){1&i&&(n.TgZ(0,"div",18),n._uU(1," Please select a country "),n.qZA())}function Se(i,c){1&i&&(n.TgZ(0,"div",21),n._uU(1," Failed to load this country results "),n.qZA())}const Ie=[{path:":country",component:B,children:[{path:"team",loadChildren:()=>h.e(367).then(h.bind(h,1367)).then(i=>i.TeamResultsModule)},{path:"top-league",component:(()=>{class i{constructor(o,a){this.leagueService=o,this.route=a,this.leagueResults$=$.C,this.selectedCountry$=$.C,this.selectedTopLeague$=$.C,this.loadingStatus$=ue,this.apiResponse$=ue}ngOnInit(){this.selectedCountry$=this.route.parent.params.pipe((0,A.U)(o=>o.country),(0,be.O)(this.route.parent.snapshot.params.country)),this.selectedTopLeague$=this.selectedCountry$.pipe((0,A.U)(o=>this.leagueService.GetTopLeague(o))),this.apiResponse$=this.selectedTopLeague$.pipe((0,Ae.w)(o=>{if(null==o)return(0,K.of)("not yet loaded");const a=this.leagueService.GetCurrentSeason();return this.leagueService.GetAllTeamResults(o,a)}),function ke(i,c,o){let a,m=!1;return i&&"object"==typeof i?({bufferSize:a=1/0,windowTime:c=1/0,refCount:m=!1,scheduler:o}=i):a=i??1/0,(0,_.B)({connector:()=>new He(a,c,o),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:m})}(1)),this.loadingStatus$=this.apiResponse$.pipe(Fe),this.leagueResults$=this.apiResponse$.pipe(he)}static#e=this.\u0275fac=function(a){return new(a||i)(n.Y36(L),n.Y36(C.gz))};static#t=this.\u0275cmp=n.Xpm({type:i,selectors:[["app-top-league-results"]],decls:13,vars:10,consts:[[1,"card","my-5"],[1,"card-header"],[1,"display-6"],[1,"text-primary"],[1,"card-body",3,"ngSwitch"],["class","table table-striped table-hover border",4,"ngSwitchCase"],[4,"ngSwitchCase"],["class","text-secondary",4,"ngSwitchCase"],["class","alert alert-danger",4,"ngSwitchCase"],[1,"table","table-striped","table-hover","border"],["title","Team name"],["title","Games played"],["title","Wins"],["title","Losses"],["title","Draws"],[4,"ngFor","ngForOf"],["alt","team logo",1,"tiny-team-logo",3,"src"],[3,"routerLink"],[1,"text-secondary"],["role","status",1,"spinner-border","spinner-border-sm","ms-3"],[1,"visually-hidden"],[1,"alert","alert-danger"]],template:function(a,m){if(1&a&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span",2),n._uU(3,"Results for "),n.TgZ(4,"span",3),n._uU(5),n.ALo(6,"async"),n.qZA()()(),n.TgZ(7,"div",4),n.ALo(8,"async"),n.YNc(9,Be,21,3,"table",5),n.YNc(10,Ze,6,0,"div",6),n.YNc(11,Oe,2,0,"div",7),n.YNc(12,Se,2,0,"div",8),n.qZA()()),2&a){let y;n.xp6(5),n.Oqu(null==(y=n.lcZ(6,6,m.selectedTopLeague$))?null:y.name),n.xp6(2),n.Q6J("ngSwitch",n.lcZ(8,8,m.loadingStatus$)),n.xp6(2),n.Q6J("ngSwitchCase","loaded"),n.xp6(1),n.Q6J("ngSwitchCase","loading"),n.xp6(1),n.Q6J("ngSwitchCase","not yet loaded"),n.xp6(1),n.Q6J("ngSwitchCase","error")}},dependencies:[p.sg,p.RF,p.n9,C.rH,p.Ov],encapsulation:2})}return i})()},{path:"**",redirectTo:"top-league"}]}];let Xe=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=n.oAB({type:i});static#s=this.\u0275inj=n.cJS({providers:[L],imports:[M.a,p.ez,C.Bz.forChild(Ie)]})}return i})()},4366:(se,O,h)=>{h.d(O,{C:()=>C});var p=h(5592),n=h(2420);const C=new p.y(n.Z)},9862:(se,O,h)=>{h.d(O,{JF:()=>Ve,eN:()=>le});var p=h(9291),n=h(2096),C=h(7715),B=h(5592),M=h(6328),ge=h(2181),A=h(7398),_=h(4716),K=h(4664),q=h(6814);class Z{}class X{}class w{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const l=t.slice(0,r),d=l.toLowerCase(),u=t.slice(r+1).trim();this.maybeSetNormalizedName(l,d),this.headers.has(d)?this.headers.get(d).push(u):this.headers.set(d,[u])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof w?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new w;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof w?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const l=("a"===e.op?this.headers.get(t):void 0)||[];l.push(...r),this.headers.set(t,l);break;case"d":const d=e.value;if(d){let u=this.headers.get(t);if(!u)return;u=u.filter(v=>-1===d.indexOf(v)),0===u.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,u)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(e,t){const r=(Array.isArray(t)?t:[t]).map(d=>d.toString()),l=e.toLowerCase();this.headers.set(l,r),this.maybeSetNormalizedName(e,l)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class ve{encodeKey(e){return ne(e)}encodeValue(e){return ne(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const Y=/%(\d[a-f0-9])/gi,F={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ne(s){return encodeURIComponent(s).replace(Y,(e,t)=>F[t]??e)}function U(s){return`${s}`}class S{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new ve,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Te(s,e){const t=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(l=>{const d=l.indexOf("="),[u,v]=-1==d?[e.decodeKey(l),""]:[e.decodeKey(l.slice(0,d)),e.decodeValue(l.slice(d+1))],f=t.get(u)||[];f.push(v),t.set(u,f)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t],l=Array.isArray(r)?r.map(U):[U(r)];this.map.set(t,l)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const l=e[r];Array.isArray(l)?l.forEach(d=>{t.push({param:r,value:d,op:"a"})}):t.push({param:r,value:l,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new S({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(U(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const l=r.indexOf(U(e.value));-1!==l&&r.splice(l,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class re{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function oe(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function ie(s){return typeof Blob<"u"&&s instanceof Blob}function ae(s){return typeof FormData<"u"&&s instanceof FormData}class H{constructor(e,t,r,l){let d;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function Ee(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||l?(this.body=void 0!==r?r:null,d=l):d=r,d&&(this.reportProgress=!!d.reportProgress,this.withCredentials=!!d.withCredentials,d.responseType&&(this.responseType=d.responseType),d.headers&&(this.headers=d.headers),d.context&&(this.context=d.context),d.params&&(this.params=d.params)),this.headers||(this.headers=new w),this.context||(this.context=new re),this.params){const u=this.params.toString();if(0===u.length)this.urlWithParams=t;else{const v=t.indexOf("?");this.urlWithParams=t+(-1===v?"?":v<t.length-1?"&":"")+u}}else this.params=new S,this.urlWithParams=t}serializeBody(){return null===this.body?null:oe(this.body)||ie(this.body)||ae(this.body)||function Ce(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof S?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ae(this.body)?null:ie(this.body)?this.body.type||null:oe(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof S?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,r=e.url||this.url,l=e.responseType||this.responseType,d=void 0!==e.body?e.body:this.body,u=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,v=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let f=e.headers||this.headers,R=e.params||this.params;const G=e.context??this.context;return void 0!==e.setHeaders&&(f=Object.keys(e.setHeaders).reduce((x,P)=>x.set(P,e.setHeaders[P]),f)),e.setParams&&(R=Object.keys(e.setParams).reduce((x,P)=>x.set(P,e.setParams[P]),R)),new H(t,r,d,{params:R,headers:f,context:G,reportProgress:v,responseType:l,withCredentials:u})}}var I=function(s){return s[s.Sent=0]="Sent",s[s.UploadProgress=1]="UploadProgress",s[s.ResponseHeader=2]="ResponseHeader",s[s.DownloadProgress=3]="DownloadProgress",s[s.Response=4]="Response",s[s.User=5]="User",s}(I||{});class z{constructor(e,t=200,r="OK"){this.headers=e.headers||new w,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class Q extends z{constructor(e={}){super(e),this.type=I.ResponseHeader}clone(e={}){return new Q({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class D extends z{constructor(e={}){super(e),this.type=I.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new D({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class ce extends z{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function ee(s,e){return{body:e,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let le=(()=>{class s{constructor(t){this.handler=t}request(t,r,l={}){let d;if(t instanceof H)d=t;else{let f,R;f=l.headers instanceof w?l.headers:new w(l.headers),l.params&&(R=l.params instanceof S?l.params:new S({fromObject:l.params})),d=new H(t,r,void 0!==l.body?l.body:null,{headers:f,context:l.context,params:R,reportProgress:l.reportProgress,responseType:l.responseType||"json",withCredentials:l.withCredentials})}const u=(0,n.of)(d).pipe((0,M.b)(f=>this.handler.handle(f)));if(t instanceof H||"events"===l.observe)return u;const v=u.pipe((0,ge.h)(f=>f instanceof D));switch(l.observe||"body"){case"body":switch(d.responseType){case"arraybuffer":return v.pipe((0,A.U)(f=>{if(null!==f.body&&!(f.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return f.body}));case"blob":return v.pipe((0,A.U)(f=>{if(null!==f.body&&!(f.body instanceof Blob))throw new Error("Response is not a Blob.");return f.body}));case"text":return v.pipe((0,A.U)(f=>{if(null!==f.body&&"string"!=typeof f.body)throw new Error("Response is not a string.");return f.body}));default:return v.pipe((0,A.U)(f=>f.body))}case"response":return v;default:throw new Error(`Unreachable: unhandled observe type ${l.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new S).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,l={}){return this.request("PATCH",t,ee(l,r))}post(t,r,l={}){return this.request("POST",t,ee(l,r))}put(t,r,l={}){return this.request("PUT",t,ee(l,r))}static#e=this.\u0275fac=function(r){return new(r||s)(p.LFG(Z))};static#t=this.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac})}return s})();function pe(s,e){return e(s)}function we(s,e){return(t,r)=>e.intercept(t,{handle:l=>s(l,r)})}const Pe=new p.OlP(""),L=new p.OlP(""),$=new p.OlP("");function Ae(){let s=null;return(e,t)=>{null===s&&(s=((0,p.f3M)(Pe,{optional:!0})??[]).reduceRight(we,pe));const r=(0,p.f3M)(p.HDt),l=r.add();return s(e,t).pipe((0,_.x)(()=>r.remove(l)))}}let fe=(()=>{class s extends Z{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,p.f3M)(p.HDt)}handle(t){if(null===this.chain){const l=Array.from(new Set([...this.injector.get(L),...this.injector.get($,[])]));this.chain=l.reduceRight((d,u)=>function xe(s,e,t){return(r,l)=>t.runInContext(()=>e(r,d=>s(d,l)))}(d,u,this.injector),pe)}const r=this.pendingTasks.add();return this.chain(t,l=>this.backend.handle(l)).pipe((0,_.x)(()=>this.pendingTasks.remove(r)))}static#e=this.\u0275fac=function(r){return new(r||s)(p.LFG(X),p.LFG(p.lqb))};static#t=this.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac})}return s})();const i=/^\)\]\}',?\n/;let o=(()=>{class s{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new p.vHH(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,C.D)(r.\u0275loadImpl()):(0,n.of)(null)).pipe((0,K.w)(()=>new B.y(d=>{const u=r.build();if(u.open(t.method,t.urlWithParams),t.withCredentials&&(u.withCredentials=!0),t.headers.forEach((g,T)=>u.setRequestHeader(g,T.join(","))),t.headers.has("Accept")||u.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const g=t.detectContentTypeHeader();null!==g&&u.setRequestHeader("Content-Type",g)}if(t.responseType){const g=t.responseType.toLowerCase();u.responseType="json"!==g?g:"text"}const v=t.serializeBody();let f=null;const R=()=>{if(null!==f)return f;const g=u.statusText||"OK",T=new w(u.getAllResponseHeaders()),J=function c(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(u)||t.url;return f=new Q({headers:T,status:u.status,statusText:g,url:J}),f},G=()=>{let{headers:g,status:T,statusText:J,url:Le}=R(),E=null;204!==T&&(E=typeof u.response>"u"?u.responseText:u.response),0===T&&(T=E?200:0);let me=T>=200&&T<300;if("json"===t.responseType&&"string"==typeof E){const $e=E;E=E.replace(i,"");try{E=""!==E?JSON.parse(E):null}catch(Ne){E=$e,me&&(me=!1,E={error:Ne,text:E})}}me?(d.next(new D({body:E,headers:g,status:T,statusText:J,url:Le||void 0})),d.complete()):d.error(new ce({error:E,headers:g,status:T,statusText:J,url:Le||void 0}))},x=g=>{const{url:T}=R(),J=new ce({error:g,status:u.status||0,statusText:u.statusText||"Unknown Error",url:T||void 0});d.error(J)};let P=!1;const De=g=>{P||(d.next(R()),P=!0);let T={type:I.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(T.total=g.total),"text"===t.responseType&&u.responseText&&(T.partialText=u.responseText),d.next(T)},te=g=>{let T={type:I.UploadProgress,loaded:g.loaded};g.lengthComputable&&(T.total=g.total),d.next(T)};return u.addEventListener("load",G),u.addEventListener("error",x),u.addEventListener("timeout",x),u.addEventListener("abort",x),t.reportProgress&&(u.addEventListener("progress",De),null!==v&&u.upload&&u.upload.addEventListener("progress",te)),u.send(v),d.next({type:I.Sent}),()=>{u.removeEventListener("error",x),u.removeEventListener("abort",x),u.removeEventListener("load",G),u.removeEventListener("timeout",x),t.reportProgress&&(u.removeEventListener("progress",De),null!==v&&u.upload&&u.upload.removeEventListener("progress",te)),u.readyState!==u.DONE&&u.abort()}})))}static#e=this.\u0275fac=function(r){return new(r||s)(p.LFG(q.JF))};static#t=this.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac})}return s})();const a=new p.OlP("XSRF_ENABLED"),y=new p.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),W=new p.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class k{}let We=(()=>{class s{constructor(t,r,l){this.doc=t,this.platform=r,this.cookieName=l,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,q.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}static#e=this.\u0275fac=function(r){return new(r||s)(p.LFG(q.K0),p.LFG(p.Lbi),p.LFG(y))};static#t=this.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac})}return s})();function Ge(s,e){const t=s.url.toLowerCase();if(!(0,p.f3M)(a)||"GET"===s.method||"HEAD"===s.method||t.startsWith("http://")||t.startsWith("https://"))return e(s);const r=(0,p.f3M)(k).getToken(),l=(0,p.f3M)(W);return null!=r&&!s.headers.has(l)&&(s=s.clone({headers:s.headers.set(l,r)})),e(s)}var N=function(s){return s[s.Interceptors=0]="Interceptors",s[s.LegacyInterceptors=1]="LegacyInterceptors",s[s.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",s[s.NoXsrfProtection=3]="NoXsrfProtection",s[s.JsonpSupport=4]="JsonpSupport",s[s.RequestsMadeViaParent=5]="RequestsMadeViaParent",s[s.Fetch=6]="Fetch",s}(N||{});function Ke(...s){const e=[le,o,fe,{provide:Z,useExisting:fe},{provide:X,useExisting:o},{provide:L,useValue:Ge,multi:!0},{provide:a,useValue:!0},{provide:k,useClass:We}];for(const t of s)e.push(...t.\u0275providers);return(0,p.MR2)(e)}const ze=new p.OlP("LEGACY_INTERCEPTOR_FN");function qe(){return function j(s,e){return{\u0275kind:s,\u0275providers:e}}(N.LegacyInterceptors,[{provide:ze,useFactory:Ae},{provide:L,useExisting:ze,multi:!0}])}let Ve=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=p.oAB({type:s});static#s=this.\u0275inj=p.cJS({providers:[Ke(qe())]})}return s})()}}]);