import type { SoccerCountry } from '../shared/app.model';

import { Component } from '@angular/core';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent {
  public countries: SoccerCountry[] = ['england', 'spain', 'germany', 'france', 'italy'];
}
