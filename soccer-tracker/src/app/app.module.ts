import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { CountryResultsComponent } from './country-results/country-results.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'country/:country', component: CountryResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    CountryResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
