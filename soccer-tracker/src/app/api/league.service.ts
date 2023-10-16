import { Injectable } from '@angular/core';
import { League, SoccerCountry, TeamResult, TeamResults, TeamResultsResponse} from '../app.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { withLoadingAndErrorStatus } from './api.utils';
import { ApiResponse, ApiLeague, ApiTeamStanding } from './api.model';
import { ApiBaseService } from './api-base.service';
import { first } from 'lodash-es'

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

  public GetAllTeamResults(league: League, season: number): Observable<TeamResultsResponse> {
    console.log("requesting", league, season);    
    const response$ = this.http.get<ApiResponse<ApiLeague>>('https://v3.football.api-sports.io/standings', {
      headers: super.GetApiHeaders(),
      params: {
        league: league.id,
        season
      }
    }).pipe(
        map(r => first(r.response)?.league?.standings.flat() ?? []),
        map(standings => standings.map(standing => this.GetTeamResult(standing as ApiTeamStanding))), 
        withLoadingAndErrorStatus,
      );
    return response$;
  }

  private GetTeamResult(teamStanding: ApiTeamStanding): TeamResult {
    console.log('Get result for team', teamStanding);
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
    console.log('Got result for team', result);
    return result;
  }       
}
