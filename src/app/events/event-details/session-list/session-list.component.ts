import { Component, Input, OnChanges } from '@angular/core'

import { ISession, restrictedWords } from '../../shared/index'

import { AuthService } from '../../../user/auth.service'

import { VoterService } from '../voter.service'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'

})
export class SessionListComponent  {
 @Input() sessions:ISession[]

 testAff = "Ceci est le tes t dans le fichier TS"
 
}



