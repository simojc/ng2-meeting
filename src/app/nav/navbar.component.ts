
import { Component } from '@angular/core'

import { AuthService } from '../user/auth.service'
import { ISession } from '../events/shared/event.model'
import { EventService } from '../events/index'

import { Router } from '@angular/router'

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
  searchTerm: string = ""
  foundSessions: ISession[]

  constructor(private auth: AuthService, private eventService: EventService, private router: Router) {

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions
       console.log(this.foundSessions)
    })

  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['user/login'])
    })
  }

}
