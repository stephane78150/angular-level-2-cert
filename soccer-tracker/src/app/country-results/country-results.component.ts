import type { LoadingStatus, Response } from '../api.model';
import type { TeamResults, League } from '../api/league.model';
import { NOT_YET_LOADED, toLoadingStatus, toResultData } from '../api/api.utils';

import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../api/league.service';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable, map, of, shareReplay, startWith, switchMap } from 'rxjs';


@Component({
  selector: 'app-country-results',
  templateUrl: './country-results.component.html',
  styleUrls: ['./country-results.component.css']
})
export class CountryResultsComponent implements OnInit {  
  public leagueResults$ : Observable<TeamResults> = NEVER;
  public selectedTopLeague$: Observable<League> = NEVER;
  public loadingStatus$ : Observable<LoadingStatus> = NOT_YET_LOADED;
  private apiResponse$: Observable<Response<TeamResults>> = NOT_YET_LOADED;    

  public constructor(private leagueService: LeagueService, private route: ActivatedRoute) {    
  }

  public ngOnInit(): void {
    const selectedCountry$ = this.route.params.pipe(map(params => params['country']), startWith(() => this.route.snapshot.params['country']));
    this.selectedTopLeague$ = selectedCountry$.pipe(map(country => this.leagueService.GetTopLeague(country)));
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