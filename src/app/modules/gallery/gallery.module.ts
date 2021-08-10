import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
import {GalleryComponent} from './pages';
import {GalleryRoutingModule} from "./gallery.routing.module";
// import {FooterComponent,
//   HeaderComponent,
//   MainComponent,
//   SidebarComponent
// } from   "@shared/components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// import { AccessManagementRoutingModule } from './access-management.routing.module';
// import { CoreModule } from '@ngxceed/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    // CommonModule,
    GalleryRoutingModule,
    // CommonModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    // FormsModule,
    FontAwesomeModule

  ],
  declarations: [
    // FooterComponent,
    // MainComponent,
    // HeaderComponent,
    GalleryComponent,
    // SidebarComponent
  ],
})
export class GalleryModule {
}
