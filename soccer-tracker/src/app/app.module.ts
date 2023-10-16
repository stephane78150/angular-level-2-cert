import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { CountryResultsComponent } from './country-results/country-results.component';
import { Routes, RouterModule } from '@angular/router';
import { CountryResultsModule } from './country-results/country-results.module';

const routes: Routes = [
  {path: 'country/:country', component: CountryResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
  ],
  imports: [
    BrowserModule,
    CountryResultsModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
