import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { GreetingComponent } from './greeting.component';

import { HiComponent } from './hi.component';
import { HeyComponent } from './hey.component';
import { HolaComponent } from './hola.component';
import { AllGreetingsComponent } from './allGreetings.component';

import { GreetingRoutingModule } from './greeting-routing.module';

const ROUTED_COMPONENTS = [ HiComponent, HolaComponent, HeyComponent, AllGreetingsComponent]

@NgModule({
  imports: [
    CommonModule,
    GreetingRoutingModule
  ],
  declarations: [
    GreetingComponent,
    ROUTED_COMPONENTS
  ], 
  exports: []
})
export class GreetingModule {}
