
import { Component, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { IEvnmt } from '../../Models/index'

@Component({
  selector: 'reunions-thumbnail',
  templateUrl: './reunions-thumbnail.component.html',
  styles: [`
		.thumbnail {min-height: 201px;}
		.pad-left {margin-left: 10px;}
		.well div {color: #bbb;}		
	`]
})

export class EventsThumbnailComponent {

  @Input() evnmt: IEvnmt

  constructor(private router: Router, private route: ActivatedRoute) {
   // this.route.params.subscribe(params => console.log(params));
  }
	
	getStartTimeStyle(): any {
      if (this.evnmt && this.evnmt.time === '8:00 am')			
			return {color: '#003300', 'font-weight': 'bold'}
		return {}
		
		// On peut assi utiliser des classe de style pour faire la même chose et utiliser dans le template ngClass à la place de ngStyle.
	}

    goDetail(id: number) {
      this.router.navigate(['/events', id]);
      //this.router.navigate(['events', { id: id }]);
    }

}



