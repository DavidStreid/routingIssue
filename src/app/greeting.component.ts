import {Component, OnInit} from '@angular/core'
import {GREETINGS} from './greetings';

@Component({
	selector: 'greeting',
	templateUrl: './greeting.component.html',
	styleUrls: ['./allGreetings.component.css']
})

export class GreetingComponent implements OnInit {
	greetings: Object[];
	ngOnInit(): void {
		this.greetings = GREETINGS;
	}
}