import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'country', loadChildren: () => import('./country-results/country-results.module').then(m => m.CountryResultsModule)},
  {path: 'team', loadChildren: () => import('./team-results/team-results.module').then(m => m.TeamResultsModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
