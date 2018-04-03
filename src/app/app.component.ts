import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar> </nav-bar>
  <alert></alert>
	<router-outlet> </router-outlet>
	`
})
export class AppComponent {
  title = 'app';
}
