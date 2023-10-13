import { Component, OnDestroy, OnInit } from '@angular/core';
import { SoccerCountry, SoccerTopLeague, TeamResult } from '../app.model';
import { CountryResultsService } from './country-results.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-results',
  templateUrl: './country-results.component.html',
  styleUrls: ['./country-results.component.css']
})
export class CountryResultsComponent implements OnInit, OnDestroy {
  public results: TeamResult[] = [];  
  private selectedCountry: SoccerCountry = null!;
  public selectedTopLeague: SoccerTopLeague = null!;
  private subSelectedCountry: Subscription | null = null;

  public constructor(private service: CountryResultsService, private route: ActivatedRoute) {    
  }

  public ngOnInit(): void {
    this.SetSelectedCountry(this.route.snapshot.params['country']);
    this.subSelectedCountry = this.route.params.subscribe(params => {
      this.SetSelectedCountry(params['country']);
    })
  }

  public ngOnDestroy(): void {    
    this.subSelectedCountry?.unsubscribe();
  }
  

  private SetSelectedCountry(selectedCountry: SoccerCountry): void {
    this.selectedCountry = selectedCountry;
    this.selectedTopLeague = this.service.GetTopLeague(selectedCountry);
    this.results = this.service.GetResults(this.selectedTopLeague);
    console.log('Set selected', this.selectedCountry, this.selectedTopLeague, this.results);
  }

}


