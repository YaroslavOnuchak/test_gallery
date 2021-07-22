import {Routes} from '@angular/router';

import {CreateComponent, GeneralComponent} from './pages';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main_page',
    // pathMatch: 'full',
  },
  {
    path: 'main_page',
    component: GeneralComponent,
    children: [
      {
        path: '',
        redirectTo: 'main_page',
        // pathMatch: 'full',
      }, {
        path: 'create',
        component: CreateComponent,
      }

    ]
  },
];
