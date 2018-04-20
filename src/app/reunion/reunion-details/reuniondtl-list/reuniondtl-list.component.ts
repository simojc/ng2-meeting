import { Component, Input, OnChanges } from '@angular/core'

import { IEvnmtdtl } from '../../../Models/index'
import { restrictedWords } from '../../../_directives/index';

import { AuthService } from '../../../user/auth.service'
import { AlertService, AutresService, EvnmtdtlService } from '../../../_services/index';

import { VoterService } from '../voter.service'

@Component({
  selector: 'reuniondtl-list',
  templateUrl: './reuniondtl-list.component.html'

})

export class ReuniondtllListComponent implements OnChanges {
  @Input() evnmtdtls: IEvnmtdtl[]
  //@Input() filterBy: string
  @Input() sortBy: string
  @Input() evnmtId: number
  visibleEvnmtdtls : IEvnmtdtl[] = []

  constructor(private auth: AuthService, private voterService: VoterService,
    private evnmtdtlService: EvnmtdtlService) {  }

  // Cett efonction fait une copie du tableau des sessions dans le tableau visibleSessions
  // Le filtre ne s'applique pas sur 'session' qui reste inchangé tout le long.
  // C'est la nouvelle façon de filtre dans Angular 2 (contrairement à Angular 1 qui filtre avec les pipe)
  // Cette façon de faire est beaucoup plus performant.
  //filterSessions(filter) {
  //  if (filter === 'all') {
  //    this.visibleEvnmtdtls = this.evnmtdtls.slice(0)
  //  } else {
  //    this.visibleEvnmtdtls = this.evnmtdtls.filter(session => {
  //      return session.level.toLocaleLowerCase() === filter
  //    }
  //    )
  //  }
  //}

  ngOnChanges() {
    if (this.evnmtdtls) {
     // this.filterSessions(this.filterBy)
      this.sortBy === 'title'  ;
    }
  }

  // toggleVote(session: IEvnmtdtl) {
  //   if (this.userHasVoted(session)) {
  //     this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.name)
  //   } else {
  //     this.voterService.addVoter(this.eventId, session, this.auth.currentUser.name)
  //   }
  //   if (this.sortBy === 'votes') {
  //     this.visibleEvnmtdtls.sort(sortByVotesDesc)
  //   }

  // }


  // userHasVoted(session: IEvnmtdtl) {
  //   return this.voterService.userHasVoted(session, this.auth.currentUser.name)
  // }

}

function sortByTitleAsc(s1: IEvnmtdtl, s2: IEvnmtdtl) {
  if (s1.title > s2.title) return 1
  else if (s1.title === s2.title) return 0
  else return -1
}

// function sortByVotesDesc(s1: IEvnmtdtl, s2: IEvnmtdtl) {
//   return s2.voters.length - s1.voters.length
// }

//export class SessionListComponent  {
// @Input() sessions:ISession[]

// testAff = "Ceci est le tes t dans le fichier TS"
 
//}



