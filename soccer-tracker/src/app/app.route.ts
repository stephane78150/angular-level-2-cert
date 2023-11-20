import { Routes } from '@angular/router';

const routes: Routes = [  
    {path: 'country', loadChildren: () => import('./country-results/country-results.route')},
  ];

  
  export default routes;