import { Component, OnInit } from '@angular/core';
 
import { IUser, IRpnpers } from  '../Models/index'
//import { UserService } from '../user.service';
import { AlertService , RpnpersService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: IUser;
    rpnperss: IRpnpers[] = [];
 
    constructor(private alertService: AlertService, private rpnpersService: RpnpersService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(this.currentUser)
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(_id: string) {
       // this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }
    
    private loadAllUsers() {
        //console.log("this.currentUser.email =   "+this.currentUser.email)
        
        this.rpnpersService.getAll().subscribe(
            rpnperss => { this.rpnperss = rpnperss; },
         error => { this.alertService.error(error);}
    );

    }



    
}
