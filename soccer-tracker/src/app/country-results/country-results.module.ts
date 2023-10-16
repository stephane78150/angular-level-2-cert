import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryResultsComponent } from './country-results.component';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [
    CountryResultsComponent,
  ],
  imports: [
    ApiModule,    
    CommonModule
  ]
})
export class CountryResultsModule { }
