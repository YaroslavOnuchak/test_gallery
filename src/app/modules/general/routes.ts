import {Routes} from '@angular/router';

import {
  GeneralComponent
} from './pages';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    // pathMatch: 'full',
  },

  {
    path: 'dashboard',
    component: GeneralComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'main_page',
    //     // pathMatch: 'full',
    //   }, {
    //     path: 'create',
    //     component: CreateComponent,
    //   }
    //
    // ]
  },
  {
    path: 'create',
    loadChildren: () =>
      import('../create/create.module')
        .then(m => m.CreateModule),
  },
];
