import {Routes} from '@angular/router';

import {
  GalleryComponent
} from './pages';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    // pathMatch: 'full',
  },

  {
    path: '',
    component: GalleryComponent,
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
    path: 'album/:id',
    loadChildren: () =>
      import('../create/create.module')
        .then(m => m.CreateModule),
  },
  // {
  //   path: 'test',
  //   loadChildren: () =>
  //     import('../create/create.module')
  //       .then(m => m.CreateModule),
  // },
];
