import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
// import {GeneralModule} from "./modules/general/general.module";
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
    // loadChildren: './modules/general/general.module#GeneralModule',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
