import { Routes } from "@angular/router";
import { TeamResultsComponent } from "./team-results.component";
import { LastSoccerMatchesResolver } from "./team-results.resolve";
import { TeamService } from "./team.service";

const routes: Routes = [
    {
      path: ':teamId/:teamName', 
      component: TeamResultsComponent, 
      resolve: { lastMatches: LastSoccerMatchesResolver},
      providers: [TeamService, LastSoccerMatchesResolver],    
     }
  ];

  export default routes;