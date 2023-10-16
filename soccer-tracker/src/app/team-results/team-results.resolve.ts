import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LastSoccerMatches, SoccerMatch } from "./team.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TeamService } from "./team.service";
import { toResultData } from "api/api.utils";

@Injectable()
export class LastSoccerMatchesResolver implements Resolve<LastSoccerMatches> {
    constructor(private teamService: TeamService) {
        
    }

    public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<LastSoccerMatches> {
      const teamId: number = route.params['teamId'];
      return this.teamService.GetLastGames(teamId, 10);
    }
}