import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LastSoccerMatches } from "./team.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TeamService } from "./team.service";

@Injectable({
  providedIn: 'root',
})
export class LastSoccerMatchesResolver implements Resolve<LastSoccerMatches> {
    constructor(private teamService: TeamService) {
        
    }

    public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<LastSoccerMatches> {
      const teamId: number = route.params['teamId'];
      return this.teamService.GetLastGames(teamId, 10);
    }
}