import { Component } from '@angular/core';

@Component({
	template: `<h3>{{ title }}</h3>`,
	selector: 'sample-bar'
})
export class BarComponent {
	public title = 'Bar';
}
