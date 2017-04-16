import {Component, OnInit} from '@angular/core';
import { Router }  from '@angular/router';
import {GREETINGS} from './greetings';

@Component({
	selector: 'all-greetings',
	templateUrl: './allGreetings.component.html',
	styleUrls: ['./style.css']
})

export class AllGreetingsComponent implements OnInit {
	greetings: Object[];

	constructor(private router: Router) { }

	onClick(greeting: any): void {
		this.router.navigate([greeting.routerLink]);
	}
	ngOnInit(): void {
		this.greetings = GREETINGS;
	}
}