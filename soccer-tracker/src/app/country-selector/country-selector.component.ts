import { RouterModule } from '@angular/router';
import type { SoccerCountry } from '../shared/app.model';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css'],
  imports: [RouterModule, CommonModule]
})
export class CountrySelectorComponent {
  public countries: SoccerCountry[] = ['england', 'spain', 'germany', 'france', 'italy'];
}
