import { Injectable } from '@angular/core';
import { SoccerCountry, SoccerTopLeague, TeamResult } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class CountryResultsService {

  constructor() { }

  GetTopLeague(country: SoccerCountry): SoccerTopLeague {
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

  public GetResults(league: SoccerTopLeague): TeamResult[] {
    return [
      {teamName: 'Manchester City', games: 4, wins: 4, losses: 0, draws: 0, goalDifference: 9, points: 12},
      {teamName: 'Tottenham', games: 4, wins: 3, losses: 1, draws: 0, goalDifference: 7, points: 10},
      {teamName: 'Liverpool', games: 4, wins: 3, losses: 1, draws: 0, goalDifference: 6, points: 10},
    ];
  }
}
