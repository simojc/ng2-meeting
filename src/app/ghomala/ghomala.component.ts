import { Component, OnInit } from '@angular/core';

//import { IUser } from  '../../Models/index'
//import { UserService } from '../user.service';
//import { AlertService } from '../../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'ghomala.component.html',
  styles: [`
                       div.container {
                  width: 100%;
                  border: 1px solid gray;
              }

              header, footer {
                  padding: 1em;
                  color: white;
                  background-color: black;
                  clear: left;
                  text-align: center;
              }

              nav {
                  float: left;
                  max-width: 160px;
                  margin: 0;
                  padding: 1em;
              }

              nav ul {
                  list-style-type: none;
                  padding: 0;
              }
   
              nav ul a {
                  text-decoration: none;
              }

              article {
                  margin-left: 170px;
                  border-left: 1px solid gray;
                  padding: 1em;
                  overflow: hidden;
              }
	`]
})

export class GhomalaComponent implements OnInit {
  //currentUser: IUser;
  //users: IUser[] = [];

  //constructor(private userService: UserService, private alertService: AlertService) {
  //    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   // console.log(this.currentUser)
  //}

  ngOnInit() {
    // this.loadAllUsers();
  }

  //deleteUser(_id: string) {
  //    this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  //}

  //private loadAllUsers() {
  //    //console.log("this.currentUser.email =   "+this.currentUser.email)
  //    this.userService.getAll().subscribe(
  //    users => { this.users = users; },
  //     error => { this.alertService.error(error);}
  //);


  //}




}
