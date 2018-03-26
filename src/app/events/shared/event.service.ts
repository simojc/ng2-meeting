
import { Injectable, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IEvent, ISession } from './event.model'

@Injectable()
export class EventService {

  private endpointUrl = "/api/events";

    constructor(private http: Http) { }

    getEvents(): Observable<IEvent[]> {
      return this.http.get(this.endpointUrl).map((response: Response) => {
            return <IEvent[]>response.json()
        }).catch(this.handleError)

    }

    getEvent(id: number): Observable<IEvent> {
      return this.http.get(this.endpointUrl + id).map((response: Response) => {
            return <IEvent>response.json()
        }).catch(this.handleError)
    }

    saveEvent(event): Observable<IEvent> {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        return this.http.post('/api/events', JSON.stringify(event),
            options).map((response: Response) => {
                return response.json()
            }).catch(this.handleError)
    }

    searchSessions(searchTerm: string) {
        return this.http.get("/api/sessions/search?search=" + searchTerm).map((response: Response) => {
            return response.json()
        }).catch(this.handleError)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }

}

const EVENTS: IEvent[] = []


/*
@Injectable()
export class EventService{
	//constructor(private http:Http) { }
    getEvents(): Subject<IEvent[]> {
        let subject = new Subject<IEvent[]>()
	 setTimeout(() => {subject.next(EVENTS); subject.complete(); }
	 , 10)
		return subject
	}

    getEvent(id: number): IEvent {
		return EVENTS.find(event => event.id === id)
    }

    saveEvent(event) {
        event.id = 99
        event.session = []
        EVENTS.push(event)
    }

    updateEvent(event) {
        let index = EVENTS.findIndex(x => x.id = event.id)
        EVENTS[index] = event
    }

}

const EVENTS: IEvent[] = []
*/
