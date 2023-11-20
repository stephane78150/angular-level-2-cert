import { Routes } from '@angular/router';
import { CountryResultsComponent } from './country-results.component';
import { TopLeagueResultsComponent } from './top-league-results/top-league-results.component';

const routes: Routes = [
    {path: ':country', component: CountryResultsComponent, children: [    
      {path: 'team', loadChildren: () => import('team-results/team-results.route')},
      {path: 'top-league', component: TopLeagueResultsComponent},
      {path: '**', redirectTo: 'top-league'},
    ] },  
  ];

  export default routes;