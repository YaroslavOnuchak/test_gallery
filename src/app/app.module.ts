import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.modules";
import {LoginComponent} from './modules/login/pages/auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptorService, PostService} from "@shared/services";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
  providers: [PostService, {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
