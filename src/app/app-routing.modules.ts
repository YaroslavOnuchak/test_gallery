import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
// import {GalleryModule} from "./modules/general/general.module";
import {GeneralComponent} from "./modules/general/pages/general/general.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    // component:GeneralComponent,
    loadChildren: () =>
      import('./modules/general/general.module')
        .then(m => m.GeneralModule),
    // loadChildren: './modules/general/general.module#GalleryModule',
  }, {
    path: 'edit',
    // component:GeneralComponent,
    loadChildren: () =>
      import('./modules/general/general.module')
        .then(m => m.GeneralModule),
    // loadChildren: './modules/general/general.module#GalleryModule',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {preloadingStrategy:PreloadAllModules} 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
