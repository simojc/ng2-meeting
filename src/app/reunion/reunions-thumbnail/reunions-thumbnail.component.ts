
import { Component, Input , OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { IEvnmt, ILocation } from '../../Models/index'
import { EvnmtService } from '../shared/evnmt.service'
import { AlertService } from '../../_services/index';

@Component({
  selector: 'reunions-thumbnail',
  templateUrl: './reunions-thumbnail.component.html',
  styles: [`
		.thumbnail {min-height: 201px;}
		.pad-left {margin-left: 10px;}
		.well div {color: #bbb;}		
	`]
})

export class ReunionsThumbnailComponent implements OnInit {

  //@Input() evnmt: IEvnmt
  _evnmt:IEvnmt;
  public currentLocation: ILocation

  constructor(private alertService: AlertService, private evnmtService: EvnmtService,private router: Router, private route: ActivatedRoute) {
   // this.route.params.subscribe(params => console.log(params));
  }

  @Input()
  set evnmt(w_evnmt: IEvnmt ){
    this._evnmt = w_evnmt;
    if (this._evnmt.location_id) {
      this.evnmtService.getLocation(this._evnmt.location_id).subscribe(
          loc => { this._evnmt.location  = loc;  },
          error => { this.alertService.error(error);}
      );
      // return this._evnmt;
    }
  }

  get evnmt(){
    return this._evnmt;
}



  ngOnInit() {
    // if (this.evnmt.location_id) {
    //  	      this.evnmtService.getLocation(this.evnmt.location_id).subscribe(
    //    		      loc => { this.currentLocation  = loc; console.log(this.currentLocation ) },
    //    			 error => { this.alertService.error(error);}
    //       );   
    //     }
          
    }
  
}