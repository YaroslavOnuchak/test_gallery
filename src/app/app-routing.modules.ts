import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {GeneralModule} from "./modules/general/general.module";

const routes: Routes = [
  {
    path: 'general',
    loadChildren: () =>
      import('./modules/general/general.module')
        .then(m => m.GeneralModule),
    // loadChildren: './modules/general/general.module#GeneralModule',
  },
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
