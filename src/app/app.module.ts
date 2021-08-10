import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.modules";
import {LoginComponent} from './modules/login/pages/auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PostService} from "@shared/services";
import { HttpClientModule} from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    // FontAwesomeModule
    // MatIconModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
