import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../Models/index';
import { AlertService, PersService , PagerService} from '../_services/index';

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

  items = [];  // AGGRILLE
  itemCount = 0;  // AGGRILLE

     // array of all items to be paged
     private allItems: any[] = [];
     // pager object
     pager: any = {};
     // paged items
     pagedItems: any[];

  constructor(private alertService: AlertService, private persService: PersService,
    private router: Router, private pagerService: PagerService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loadMembers();
  }

  private loadMembers() {
    this.persService.getPersByType().subscribe(
      pers => {
        this.items = pers;
        this.itemCount = pers.length;

        this.allItems = pers;
        this.setPage(1);
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

    // Nouveau  code pour pagination
    setPage(page: number) {
      // get pager object from service
      this.pager = this.pagerService.getPager(this.allItems.length, page);
      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
