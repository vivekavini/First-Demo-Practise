import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { MysecondcomponentComponent } from './mysecondcomponent/mysecondcomponent.component';
import {AppRoutingModule} from './app.module.routing'


@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    MysecondcomponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
