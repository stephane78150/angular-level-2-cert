"use strict";(self.webpackChunksoccer_tracker=self.webpackChunksoccer_tracker||[]).push([[367],{1367:(L,h,o)=>{o.r(h),o.d(h,{TeamResultsModule:()=>U});var n=o(6814),d=o(3277),i=o(6913),m=o(4366),c=o(7398),l=o(7921),t=o(9291);function g(a,f){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"img",10),t.qZA()()),2&a){const e=f.$implicit;t.xp6(2),t.Q6J("src",e.homeTeam.logo,t.LSH),t.xp6(2),t.Oqu(e.homeTeam.name),t.xp6(2),t.Oqu(e.homeScore),t.xp6(2),t.Oqu(e.awayScore),t.xp6(2),t.Oqu(e.awayTeam.name),t.xp6(2),t.Q6J("src",e.awayTeam.logo,t.LSH)}}const Z=function(a){return["/country",a,"top-league"]};let y=(()=>{class a{constructor(e){this.route=e,this.selectedTeamId$=m.C,this.selectedTeamName$=m.C,this.selectedCountry$=m.C,this.lastSoccerMatches$=m.C}ngOnInit(){this.selectedTeamId$=this.route.params.pipe((0,c.U)(e=>e.teamId),(0,l.O)(this.route.snapshot.params.teamId)),this.selectedTeamName$=this.route.params.pipe((0,c.U)(e=>e.teamName),(0,l.O)(this.route.snapshot.params.teamName)),this.selectedCountry$=this.route.parent.parent.params.pipe((0,c.U)(e=>e.country),(0,l.O)(this.route.parent.parent.snapshot.params.country)),this.lastSoccerMatches$=this.route.data.pipe((0,c.U)(e=>e.lastMatches))}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(i.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-results"]],decls:31,vars:14,consts:[[1,"card","my-5"],[1,"card-header"],[1,"display-6"],[1,"text-primary"],[1,"btn","btn-xl","btn-primary","float-end","mt-1",3,"routerLink"],[1,"card-body"],[1,"table","table-striped","table-hover","border"],["title","Home team logo"],["title","Away team logo"],[4,"ngFor","ngForOf"],["alt","team logo",1,"tiny-team-logo",3,"src"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"Last 10 matches for team "),t.TgZ(4,"span",3),t._uU(5),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"a",4),t.ALo(8,"async"),t._uU(9,"Back to "),t.TgZ(10,"em"),t._uU(11),t.ALo(12,"async"),t.qZA(),t._uU(13," league results"),t.qZA()(),t.TgZ(14,"div",5)(15,"table",6)(16,"thead")(17,"tr"),t._UZ(18,"th",7),t.TgZ(19,"th"),t._uU(20,"Home team"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Home score"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Away score"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Away team"),t.qZA(),t._UZ(27,"th",8),t.qZA()(),t.TgZ(28,"tbody"),t.YNc(29,g,13,6,"tr",9),t.ALo(30,"async"),t.qZA()()()()),2&s&&(t.xp6(5),t.Oqu(t.lcZ(6,4,r.selectedTeamName$)),t.xp6(2),t.Q6J("routerLink",t.VKq(12,Z,t.lcZ(8,6,r.selectedCountry$))),t.xp6(4),t.Oqu(t.lcZ(12,8,r.selectedCountry$)),t.xp6(18),t.Q6J("ngForOf",t.lcZ(30,10,r.lastSoccerMatches$)))},dependencies:[n.sg,i.rH,n.Ov]})}return a})();var T=o(8292),v=o(9862);let p=(()=>{class a extends T.K{constructor(e){super(),this.httpClient=e}GetLastGames(e,s=10){return console.log("Get last ",s," games for team ",e),this.httpClient.get("https://v3.football.api-sports.io/fixtures",{headers:super.GetApiHeaders(),params:{team:e,last:s}}).pipe((0,c.U)(({response:C})=>C.map($=>this.MapFixtureToMatch($))))}MapFixtureToMatch(e){return{homeTeam:{id:e.teams.home.id,name:e.teams.home.name,logo:e.teams.home.logo},awayScore:e.goals.away,homeScore:e.goals.home,awayTeam:{id:e.teams.away.id,name:e.teams.away.name,logo:e.teams.away.logo}}}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})(),u=(()=>{class a{constructor(e){this.teamService=e}resolve(e,s){return this.teamService.GetLastGames(e.params.teamId,10)}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(p))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})();const A=[{path:":teamId/:teamName",component:y,resolve:{lastMatches:u}}];let U=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({providers:[p,u],imports:[n.ez,d.a,i.Bz.forChild(A)]})}return a})()}}]);