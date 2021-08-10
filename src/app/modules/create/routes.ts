import {Routes} from '@angular/router';

import {
  CreateComponent,
} from './pages';


export const routes: Routes = [
  // / {
  //   path: '',
  //   redirectTo: 'create'
  // },
  {
    path: '',
    component: CreateComponent,
  },
];
