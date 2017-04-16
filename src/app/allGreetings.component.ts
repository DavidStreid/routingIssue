import {Component, OnInit} from '@angular/core';
import {GREETINGS} from './greetings';

@Component({
	selector: 'allGreetings',
	templateUrl: './allGreetings.component.html',
	styleUrls: ['./allGreetings.component.css']
})

export class AllGreetingsComponent implements OnInit {
	greetings: Object[];
	ngOnInit(): void {
		this.greetings = GREETINGS;
	}
}