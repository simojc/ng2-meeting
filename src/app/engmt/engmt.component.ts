import { Component, OnInit } from '@angular/core';

import { IEngmt, IUser, IPers } from '../Models/index'
//import { UserService } from '../user.service';
import { AlertService, AutresService, EngmtService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'engmt.component.html'
})

export class EngmtComponent implements OnInit {
  currentUser: IUser;
  currentPers: IPers;
  engmts: IEngmt[] = [];

  constructor(private alertService: AlertService, private autresService: AutresService,
    private engmtService: EngmtService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.autresService.getPersCurrentPers().subscribe(pers => (this.currentPers = pers))
    // console.log(this.currentUser)
  }

  ngOnInit() {
    this.loadAllEngmtsPers();
  }

  deleteUser(_id: string) {
    // this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllEngmtsPers() {
    //console.log("this.currentUser.email =   "+this.currentUser.email)
    this.engmtService.getAllEngmtPers(this.currentPers.id).subscribe(
      engmts => { this.engmts = engmts; },
      error => { this.alertService.error(error); }
    );


  }




}
