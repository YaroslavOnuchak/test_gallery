import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralComponent} from './pages';
import {GeneralRoutingModule} from "./general.routing.module";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../shared/components/header/header.component.component";
import {MainComponent} from "../../shared/components/main/main.component";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// import { AccessManagementRoutingModule } from './access-management.routing.module';
// import { CoreModule } from '@ngxceed/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    // CommonModule,
    GeneralRoutingModule,
    CommonModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    // FormsModule,
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
