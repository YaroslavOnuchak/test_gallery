import {Routes} from '@angular/router';

import {
  GeneralComponent
} from './pages';
import {GalleryModule} from "../gallery/gallery.module";


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
  {
    path: 'gallery',
    loadChildren: () =>
      import('../gallery/gallery.module')
        .then(m => m.GalleryModule),
  },
];
