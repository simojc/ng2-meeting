import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar> </nav-bar>
  <alert></alert>
	<router-outlet> </router-outlet>
  `,
  styles: [`
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
  }		
`]
})
export class AppComponent {
  title = 'app';
}
