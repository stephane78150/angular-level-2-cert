import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api.module';
import { RouterModule, Routes } from '@angular/router';
import { TeamResultsComponent } from './team-results.component';

const routes: Routes = [
  {path: ':teamId', component: TeamResultsComponent }
];
@NgModule({
  imports: [
    CommonModule, 
    ApiModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamResultsModule { }
