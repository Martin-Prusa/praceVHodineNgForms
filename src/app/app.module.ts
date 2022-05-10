import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { Login1Component } from './components/login1/login1.component';
import { CarsComponent } from './components/cars/cars.component';
import { FailingComponent } from './components/failing/failing.component';

@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    CarsComponent,
    FailingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
