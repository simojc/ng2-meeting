import { Injectable } from '@angular/core'
import { ISession } from '../../Models/index'


import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class VoterService {

  constructor(private http: Http) { }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
    session.voters = session.voters.filter(voter => voter !== voterName)

    this.http.delete(url).catch(this.handleError).subscribe()

  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName)

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`

    return this.http.post(url, JSON.stringify({}),
      options).map((response: Response) => {
        return response.json()
      }).catch(this.handleError).subscribe()
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName)
  }


  private handleError(error: Response) {
    return Observable.throw(error.statusText)
  }


}
