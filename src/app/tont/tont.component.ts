import { Component, OnInit } from '@angular/core';
import { IUser } from  '../Models/index'
import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: IUser;
    users: IUser[] = [];
 
    constructor(private alertService: AlertService) {
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
    //     this.userService.getAll().subscribe(
    //     users => { this.users = users; },
    //      error => { this.alertService.error(error);}
    // );

    }



    
}
