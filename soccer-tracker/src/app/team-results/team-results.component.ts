import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable, map, startWith } from 'rxjs';
import { LastSoccerMatches } from './team.model';
import { SoccerCountry } from 'shared/app.model';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css']
})
export class TeamResultsComponent implements OnInit {
  public selectedTeamId$: Observable<number> = NEVER;
  public selectedCountry$: Observable<SoccerCountry> = NEVER;
  public lastSoccerMatches$: Observable<LastSoccerMatches> = NEVER;
  
  public constructor(private route: ActivatedRoute) {    
  }
  
  public ngOnInit(): void {
    this.selectedTeamId$ = this.route.params.pipe(map(params => params['teamId'] as number), startWith(this.route.snapshot.params['teamId'] as number));    
    this.selectedCountry$ = this.route.parent!.parent!.params.pipe(map(params => params['country'] as SoccerCountry), startWith(this.route.parent!.parent!.snapshot.params['country'] as SoccerCountry));
    this.lastSoccerMatches$ = this.route.data.pipe(map(data => data["lastMatches"] as LastSoccerMatches));
  }
}
