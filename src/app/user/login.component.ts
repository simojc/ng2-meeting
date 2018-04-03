
import { Component, Input } from '@angular/core'
import { AuthService } from './auth.service'
import { AlertService } from '../_services/index';

import { Router } from '@angular/router'

@Component({

    templateUrl: './login.component.html',
    styles: [`
			em { float:right; color:#E05C65; padding-left:10px;}
	`]
})

export class LoginComponent {
    
    constructor(private authService: AuthService, private router: Router,
        private alertService: AlertService) {

    }

    // login(formValues) {
    //   console.log("Avant...:   "+this.authService.isAuthenticated())
    //     this.authService.login_cli(formValues.email, formValues.password)
    //   console.log("Après...:   " + this.authService.isAuthenticated())
    //     this.router.navigate(['events'])
    // }


        login(formValues) {
               // this.loading = true;
                this.authService.loginUser(formValues.email, formValues.password)
                    .then(
                res => {
                            //console.log("debut login component  ..... "+" this.returnUrl= "+this.returnUrl)
                            
                           this.router.navigate(['events'])
                            this.alertService.success(' login successful', true);
                            //this.loading = false;
                           // console.log("Fin login component .....")
                        },
                        err => {
                            this.alertService.error(err);
                            //this.loading = false;
                        });
            }


    cancel() {
        this.router.navigate(['events'])
    }
}
