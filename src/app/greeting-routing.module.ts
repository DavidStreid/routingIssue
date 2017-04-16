import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './greeting.component';
import { AllGreetingsComponent } from './allGreetings.component'
import { HiComponent }    from './hi.component';
import { HeyComponent } from './hey.component';
import { HolaComponent } from './hola.component';

const greetingRoutes: Routes = [
  { 
    path: 'greeting',
    component: GreetingComponent,
    children: [
          {
            path: 'all',
            component: AllGreetingsComponent
          },
          {
            path: 'hi',
            component: HiComponent
          },
          {
            path: 'hey',
            component: HeyComponent
          },
          {
            path: 'hola',
            component: HolaComponent
          }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(greetingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GreetingRoutingModule { }