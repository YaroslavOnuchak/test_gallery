import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent, GeneralComponent} from './pages';
import {GeneralRoutingModule} from "./general.routing.module";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {MainComponent} from "../../shared/components/main/main.component";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
// import { AccessManagementRoutingModule } from './access-management.routing.module';
// import { CoreModule } from '@ngxceed/core';

@NgModule({
  imports: [
    // CommonModule,
    GeneralRoutingModule,

  ],
  declarations: [
    FooterComponent,
    MainComponent,
    HeaderComponent,
    GeneralComponent,
    SidebarComponent,
    CreateComponent
  ],
})
export class GeneralModule {
}
