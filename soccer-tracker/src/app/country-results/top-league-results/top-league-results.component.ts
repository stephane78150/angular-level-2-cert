import type { LoadingStatus, ResponseOrStatus } from 'shared/api-status.model';
import type { TeamResults, League } from '../league/league.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NOT_YET_LOADED, toLoadingStatus, toResultData } from 'api/api.utils';
import { Observable, NEVER, map, startWith, switchMap, of, shareReplay } from 'rxjs';
import { LeagueService } from '../league/league.service';
import { SoccerCountry } from 'shared/app.model';
import { CommonModule } from '@angular/common';
import { ApiModule } from 'api/api.module';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-top-league-results',
  templateUrl: './top-league-results.component.html',
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [LeagueService],
})
export class TopLeagueResultsComponent implements OnInit {
  public leagueResults$ : Observable<TeamResults> = NEVER;
  public selectedCountry$: Observable<SoccerCountry> = NEVER;
  public selectedTopLeague$: Observable<League> = NEVER;
  public loadingStatus$ : Observable<LoadingStatus> = NOT_YET_LOADED;
  private apiResponse$: Observable<ResponseOrStatus<TeamResults>> = NOT_YET_LOADED;    

  public constructor(private leagueService: LeagueService, private route: ActivatedRoute) {    
  }

  public ngOnInit(): void {
    this.selectedCountry$ = this.route.parent!.params.pipe(map(params => params['country'] as SoccerCountry), startWith(this.route.parent!.snapshot.params['country'] as SoccerCountry));
    this.selectedTopLeague$ = this.selectedCountry$.pipe(map(country => this.leagueService.GetTopLeague(country)));
    this.apiResponse$ = this.selectedTopLeague$.pipe(switchMap( (topLeague) => {
      if (topLeague == null) {
        return of('not yet loaded' as const);
      }
      const season = this.leagueService.GetCurrentSeason();
      return this.leagueService.GetAllTeamResults(topLeague, season);
    }), shareReplay(1))
    this.loadingStatus$ = this.apiResponse$.pipe(toLoadingStatus);
    this.leagueResults$ = this.apiResponse$.pipe(toResultData);
  }
}
