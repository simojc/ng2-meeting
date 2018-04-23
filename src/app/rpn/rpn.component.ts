import { Component, OnInit } from '@angular/core';
 
import { IUser, IRpnpers, IPers } from  '../Models/index'
//import { UserService } from '../user.service';
import { AlertService, RpnpersService, AutresService} from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'rpn.component.html',
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
 
export class RpnpersComponent implements OnInit {
    currentUser: IUser;
    currentPers: IPers;

    items = [];
    itemCount = 0;

    constructor(private alertService: AlertService, private rpnpersService: RpnpersService,
      private autresService: AutresService) {
    }
 
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.autresService.getPersCurrentPers().subscribe(pers => {          
            this.currentPers = pers;
          // console.log(" Ds subscribe this.currentPers.Nom = " + this.currentPers.nom)   
           this.loadRpnPers();
          })
    }
    
    getMessageStyle(): any {			
			return {color: '#ff0000', 'font-weight': 'bold'}	
		// On peut assi utiliser des classe de style pour faire la même chose et utiliser dans le template ngClass à la place de ngStyle.
	}

    private loadRpnPers() {
        // console.log("rpn.componet this.currentPers = " + this.currentPers.prenom)  
        if (!!this.currentPers) {

            this.rpnpersService.getAll(this.currentPers.id).subscribe(
                rpnpers => { 
                // console.log(" JSON.stringify(rpnpers) =   "+ JSON.stringify(rpnpers))
                    this.items = rpnpers;
                    this.itemCount =  rpnpers.length  
                },
             error => { this.alertService.error(error);}
        );
    }
        }
 
    deleteUser(_id: string) {
       // this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }
 
    }
