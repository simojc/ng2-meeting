
import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'

import { EvnmtService } from './shared/index'

@Injectable()
export class EventListResolver implements Resolve<any>{

  constructor(private evnmtService: EvnmtService)  {
	}

  resolve(){
    return this.evnmtService.getEvents() 
  }

}

