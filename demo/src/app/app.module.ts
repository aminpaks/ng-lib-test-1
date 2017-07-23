import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AModule } from 'check';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
