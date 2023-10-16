import type {LastSoccerMatches, SoccerMatch} from './team.model'
import type {ResponseOrStatus} from '../shared/api-status.model'
import type { ApiResponse, ApiFixtureDescription } from 'shared/api-sports/api.model';

import { HttpClient } from "@angular/common/http";
import { ApiBaseService } from "api/api-base.service";
import { Observable, first, map } from "rxjs";
import { withLoadingAndErrorStatus } from 'api/api.utils';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamService extends ApiBaseService {
    constructor(private httpClient: HttpClient) {
        super();
    }   

    public GetLastGames(teamId: number, numberOfGames: number = 10): Observable<LastSoccerMatches> {
      console.log('Get last ', numberOfGames, ' games for team ', teamId)
    
      const response$ = this.httpClient.get<ApiResponse<ApiFixtureDescription>>('https://v3.football.api-sports.io/fixtures', {
            headers: super.GetApiHeaders(),
            params: {
              team: teamId,
              last: numberOfGames,              
            }
          }).pipe(
            map(({response}) => response.map(fixture => this.MapFixtureToMatch(fixture))),
          );
    
       return response$;
    }

    private MapFixtureToMatch(fixture: ApiFixtureDescription): SoccerMatch {
        return {
            homeTeam: {
                id: fixture.teams.home.id,
                name: fixture.teams.home.name,
                logo: fixture.teams.home.logo,                 
            },
            awayScore: fixture.goals.away,
            homeScore: fixture.goals.home,
            awayTeam: {
                id: fixture.teams.away.id,
                name: fixture.teams.away.name,
                logo: fixture.teams.away.logo,                 
            },
        } as SoccerMatch;
    }
}