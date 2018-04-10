import { Component, OnInit } from '@angular/core';
 
import { IUser, IRpnpers, IPers } from  '../Models/index'
//import { UserService } from '../user.service';
import { AlertService, RpnpersService, AutresService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: IUser;
    
    currentPers: IPers;
    rpnperss: IRpnpers[] = [];
 
    constructor(private alertService: AlertService, private rpnpersService: RpnpersService,
      private autresService: AutresService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.autresService.getPersCurrentPers().subscribe(pers => (this.currentPers = pers))
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
