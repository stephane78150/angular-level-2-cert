import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NEVER, Observable, map, startWith } from 'rxjs';
import { LastSoccerMatches } from './team.model';
import { SoccerCountry } from 'shared/app.model';
import { CommonModule } from '@angular/common';
import { LastSoccerMatchesResolver } from './team-results.resolve';
import { TeamService } from './team.service';

@Component({
  standalone: true,
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css'],
  imports: [RouterModule, CommonModule],
})
export class TeamResultsComponent implements OnInit {
  public selectedTeamId$: Observable<number> = NEVER;
  public selectedTeamName$: Observable<string> = NEVER;
  public selectedCountry$: Observable<SoccerCountry> = NEVER;
  public lastSoccerMatches$: Observable<LastSoccerMatches> = NEVER;
  
  public constructor(private route: ActivatedRoute) {    
  }
  
  public ngOnInit(): void {
    this.selectedTeamId$ = this.route.params.pipe(map(params => params['teamId'] as number), startWith(this.route.snapshot.params['teamId'] as number));    
    this.selectedTeamName$ = this.route.params.pipe(map(params => params['teamName'] as string), startWith(this.route.snapshot.params['teamName'] as string));    
    this.selectedCountry$ = this.route.parent!.parent!.params.pipe(map(params => params['country'] as SoccerCountry), startWith(this.route.parent!.parent!.snapshot.params['country'] as SoccerCountry));
    this.lastSoccerMatches$ = this.route.data.pipe(map(data => data["lastMatches"] as LastSoccerMatches));
  }
}
