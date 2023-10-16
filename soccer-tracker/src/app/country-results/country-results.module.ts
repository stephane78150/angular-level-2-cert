import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryResultsComponent } from './country-results.component';
import { ApiModule } from '../api/api.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ':country', component: CountryResultsComponent }
];
@NgModule({
  declarations: [
    CountryResultsComponent,
  ],
  imports: [
    ApiModule,    
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CountryResultsModule { }
