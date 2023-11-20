import { Component } from '@angular/core';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
  imports: [CountrySelectorComponent, RouterModule]
})
export class AppComponent {
  title = 'soccer-tracker';
}
