import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreetingComponent }				from './greeting.component';

const appRoutes: Routes = [
	{
		path: 'greeting',
		component: GreetingComponent
	}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
