import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralComponent} from './pages';
import {GeneralRoutingModule} from "./general.routing.module";
import {FooterComponent,
  HeaderComponent,
  MainComponent,
  SidebarComponent
} from   "@shared/components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// import { AccessManagementRoutingModule } from './access-management.routing.module';
// import { CoreModule } from '@ngxceed/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FontAwesomeModule

  ],
  declarations: [
    FooterComponent,
    MainComponent,
    HeaderComponent,
    GeneralComponent,
    SidebarComponent
  ],
})
export class GeneralModule {
}
