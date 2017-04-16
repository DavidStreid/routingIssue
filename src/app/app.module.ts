import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreetingModule } from './greeting.module';

import { AppComponent }  from './app.component';

// Routing Module
import { AppRoutingModule }			from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, GreetingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
