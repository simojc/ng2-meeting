
import { Component, Input } from '@angular/core'
import { AuthService } from './auth.service'

import { Router } from '@angular/router'

@Component({

    templateUrl: './login.component.html',
    styles: [`
			em { float:right; color:#E05C65; padding-left:10px;}
	`]
})

export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
      console.log("Avant...:   "+this.authService.isAuthenticated())
        this.authService.loginUser(formValues.email, formValues.password)
      console.log("Après...:   " + this.authService.isAuthenticated())
        this.router.navigate(['events'])
    }

    login1(formValues) {
        this.authService.loginUser1(formValues.email, formValues.password).then(
          (res) => { console.log('success', res)
          this.router.navigate(['events']) },
          (err) => { console.log('error', err) }
          )
    }

    cancel() {
        this.router.navigate(['events'])
    }
}
