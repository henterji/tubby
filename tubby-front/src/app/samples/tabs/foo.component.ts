import { Component } from '@angular/core';

@Component({
	template: `<h3>{{ title }}</h3>`,
	selector: 'sample-foo'
})
export class FooComponent {
	public title = 'Foo';
}
