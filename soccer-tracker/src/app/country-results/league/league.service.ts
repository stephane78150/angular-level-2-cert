import type { ApiLeague, ApiResponse, ApiTeamStanding } from 'shared/api-sports/api.model';
import type { ResponseOrStatus } from 'shared/api-status.model';
import type { SoccerCountry} from 'shared/app.model';
import type { TeamResults, League, TeamResult } from './league.model';

import { Injectable } from '@angular/core';
import { Observable, map, share, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { withLoadingAndErrorStatus } from 'api/api.utils';
import { ApiBaseService } from 'api/api-base.service';
import { first } from 'lodash-es';

@Injectable()
export class LeagueService extends ApiBaseService {

   constructor(private http: HttpClient) {
    super();
   }

  public GetTopLeague(country: SoccerCountry): League {
      switch (country) {
          case 'england':
              return {name: 'Premier League', id: 39};
          case 'germany':
              return {name: 'Bundesliga', id: 78};
          case 'france':
              return {name: 'Ligue 1', id: 61};
          case 'spain':
              return {name: 'La Liga', id: 140};
          case 'italy':
              return {name: 'Serie A', id: 135};
          default:
              return null as never;
      }
  }

  public GetCurrentSeason() {
    const today = new Date(); 
    const year = today.getFullYear();
    return (today.getMonth() <= 6) ? (year - 1) : year;
  }

  public GetAllTeamResults(league: League, season: number): Observable<ResponseOrStatus<TeamResults>> {    
    const response$ = this.http.get<ApiResponse<ApiLeague>>('https://v3.football.api-sports.io/standings', {
      headers: super.GetApiHeaders(),
      params: {
        league: league.id,
        season
      }
    }).pipe(
        tap(() => {
          console.log("requesting", league, season);    
        }),
        map(r => first(r.response)?.league?.standings.flat() ?? []),
        map(standings => standings.map(standing => this.GetTeamResult(standing as ApiTeamStanding))), 
        withLoadingAndErrorStatus,
        share(),
      );
    return response$;
  }

  private GetTeamResult(teamStanding: ApiTeamStanding): TeamResult {
    const result: TeamResult ={
      teamId: teamStanding.team.id,
      teamName: teamStanding.team.name,
      teamLogo: teamStanding.team.logo,
      points: teamStanding.points,
      goalDifference: teamStanding.goalsDiff,
      draws: teamStanding.all.draw,
      games: teamStanding.all.played,
      wins: teamStanding.all.win,
      losses: teamStanding.all.lose,      
    };    
    return result;
  }       
}

