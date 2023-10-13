import { Component } from '@angular/core';
import { SoccerCountry } from '../app.model';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent {
  public countries: SoccerCountry[] = ['england', 'spain', 'germany', 'france', 'italy'];
}
