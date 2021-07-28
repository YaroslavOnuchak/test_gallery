import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent, } from './pages';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateRoutingModule} from "./create.routing.module";
@NgModule({
  imports: [
    // CommonModule,
    CreateRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  declarations: [
    CreateComponent
  ],
})
export class CreateModule {
}
