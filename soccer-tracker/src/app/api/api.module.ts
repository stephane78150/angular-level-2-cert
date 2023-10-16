import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueService } from '../country-results/league/league.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
  ]
})
export class ApiModule { }
