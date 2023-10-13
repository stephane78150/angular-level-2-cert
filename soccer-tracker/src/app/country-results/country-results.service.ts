import { Injectable } from '@angular/core';
import { SoccerCountry, SoccerTopLeague, TeamResults, TeamResultsResponse } from '../app.model';
import { Observable, catchError, of, startWith } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiKey = "6c1fe0be11c938d13b63537c15a3413b";

@Injectable({
  providedIn: 'root'
})
export class CountryResultsService {

  constructor(private http: HttpClient) { }

  public GetTopLeague(country: SoccerCountry): SoccerTopLeague {
      switch (country) {
          case 'england':
              return 'Premier League';
          case 'germany':
              return 'Bundesliga';
          case 'france':
              return 'Ligue 1';
          case 'spain':
              return 'La Liga';
          case 'italy':
              return 'Serie A';
          default:
              return null as never;
      }
  }

  public GetCurrentSeason() {
    const today = new Date(); 
    const year = today.getFullYear();
    return (today.getMonth() <= 6) ? (year - 1) : year;
  }

  public GetResults(league: SoccerTopLeague, season: number): Observable<TeamResultsResponse> {
    console.log("requesting", league, season);
    const url = ``;
    return this.http.get<TeamResults>(url).pipe(
      catchError( _ => of('error' as const)),
      startWith('loading' as const)
    );
  }
}
