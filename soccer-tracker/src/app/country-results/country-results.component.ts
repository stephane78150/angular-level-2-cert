import { Component, OnInit } from '@angular/core';
import { SoccerTopLeague, TeamResult, TeamResults, TeamResultsResponse } from '../app.model';
import { CountryResultsService } from './country-results.service';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable, map, of, shareReplay, startWith, switchMap } from 'rxjs';
import { ApiLoadingStatus, NOT_YET_LOADED, toLoadingStatus, toResultData } from '../api.utils';

@Component({
  selector: 'app-country-results',
  templateUrl: './country-results.component.html',
  styleUrls: ['./country-results.component.css']
})
export class CountryResultsComponent implements OnInit {  
  public leagueResults$ : Observable<TeamResults> = NEVER;
  public selectedTopLeague$: Observable<SoccerTopLeague> = NEVER;
  public loadingStatus$ : Observable<ApiLoadingStatus> = NOT_YET_LOADED;
  private apiResponse$: Observable<TeamResultsResponse> = NOT_YET_LOADED;    

  public constructor(private service: CountryResultsService, private route: ActivatedRoute) {    
  }

  public ngOnInit(): void {
    const selectedCountry$ = this.route.params.pipe(map(params => params['country']), startWith(() => this.route.snapshot.params['country']));
    this.selectedTopLeague$ = selectedCountry$.pipe(map(country => this.service.GetTopLeague(country)));
    this.apiResponse$ = this.selectedTopLeague$.pipe(switchMap( (topLeague) => {
      if (topLeague == null) {
        return of('not yet loaded' as const);
      }
      const season = this.service.GetCurrentSeason();
      return this.service.GetResults(topLeague, season);
    }), shareReplay(1))
    this.loadingStatus$ = this.apiResponse$.pipe(toLoadingStatus);
    this.leagueResults$ = this.apiResponse$.pipe(toResultData);
  }

}