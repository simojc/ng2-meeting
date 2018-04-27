import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router'
import { IUser } from '../Models/index'
import { AlertService, PersService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'pers.component.html',
  styles: [`
          body{
          color:#000000;
          margin-left:0;
          margin-right:0;
          margin-top:0;
          margin-bottom:0;
          margin-width:0;
          margin-height:0;
          background-color:#A3A6BA; 
      }
      .text {
            font-family:Verdana, Arial, Helvetica, sans-serif;
            font-size:10px;
            color:541460;
            padding:5px;
      }

   `]
})

export class PersComponent implements OnInit {
  currentUser: IUser;

  items = [];
  itemCount = 0;

  constructor(private alertService: AlertService, private persService: PersService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loadMembers();
  }

  private loadMembers() {
    this.persService.getPersByType().subscribe(
      pers => {
        this.items = pers;
        this.itemCount = pers.length
      },
      error => { this.alertService.error(error); }
    );
  }


  EditPers(id) {
    this.router.navigate(['/membres/edit', id]);
  }

  addPers() {
    this.router.navigate(['/membres/new']);
  }

}
