import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api.module';
import { RouterModule, Routes } from '@angular/router';
import { TeamResultsComponent } from './team-results.component';
import { TeamService } from './team.service';
import { LastSoccerMatchesResolver } from './team-results.resolve';

const routes: Routes = [
  {path: ':teamId/:teamName', component: TeamResultsComponent, resolve: {
    lastMatches: LastSoccerMatchesResolver,
  } }
];
@NgModule({
  declarations: [
    TeamResultsComponent,
  ],
  imports: [
    CommonModule, 
    ApiModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TeamService,
    LastSoccerMatchesResolver,
  ]
})
export class TeamResultsModule { }
