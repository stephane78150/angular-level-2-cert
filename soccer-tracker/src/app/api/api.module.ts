import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueService } from './league.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from './team.service';


@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    LeagueService,
    TeamService,
  ]
})
export class ApiModule { }
