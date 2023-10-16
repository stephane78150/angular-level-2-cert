import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryResultsComponent } from './country-results.component';
import { ApiModule } from 'api/api.module';
import { RouterModule, Routes } from '@angular/router';
import { LeagueService } from './league/league.service';
import { TopLeagueResultsComponent } from './top-league-results/top-league-results.component';

const routes: Routes = [
  {path: ':country', component: CountryResultsComponent, children: [
    {path: 'team', loadChildren: () => import('team-results/team-results.module').then(m => m.TeamResultsModule)},
    {path: 'top-league', component: TopLeagueResultsComponent},
  ] },  
];
@NgModule({
  declarations: [
    CountryResultsComponent,
    TopLeagueResultsComponent,
  ],
  imports: [
    ApiModule,    
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    LeagueService
  ]
})
export class CountryResultsModule { }
