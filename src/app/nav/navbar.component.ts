
import { Component } from '@angular/core'

import { AuthService } from '../user/auth.service'
import { ISession } from '../events/shared/event.model'
import { EventService } from '../events/index'

@Component({
	selector: 'nav-bar',
	templateUrl: './navbar.component.html',
  styles:[`
		.nav.navbar-navbar {font-size: 15px;}
    #searchForm {margin-right: 100px;}
		@media (max-width: 1200px) {#searchForm {display:none}}
		li > a.active { color: #F97924; }
	`]
})


export class NavBarComponent {
    constructor(private auth: AuthService) {

    }

}