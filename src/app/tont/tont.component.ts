import { Component, OnInit } from '@angular/core';
import { IUser, IPers, ITont } from '../Models/index'
import { AlertService, AutresService, TontService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  currentUser: IUser;
  currentPers: IPers;
  users: IUser[] = [];
  tonts: ITont[] = [];

  constructor(private alertService: AlertService, private autresService: AutresService,
    private tontService: TontService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.autresService.getPersCurrentPers().subscribe(pers => (this.currentPers = pers))
    // console.log(this.currentUser)
  }

  ngOnInit() {
    this.loadAllTontsPers();
  }

  deleteUser(_id: string) {
    // this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllTontsPers() {
    //console.log("this.currentUser.email =   "+this.currentUser.email)
    this.tontService.getAllTontPers(this.currentPers.id).subscribe(
      tonts => { this.tonts = tonts; },
          error => { this.alertService.error(error);}
     );

  }

  




}
