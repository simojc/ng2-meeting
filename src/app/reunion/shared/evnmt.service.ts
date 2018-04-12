
import { Injectable, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Http, Response, Headers, RequestOptions  } from '@angular/http'

import { IEvnmt, IEvnmtdtl, ILocation } from '../../Models/index'

import { environment } from '../../../environments/environment';

@Injectable()
export class EvnmtService {

  //private endpointUrl = "http://localhost/~simojc/phpapi/public/api/events?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvfnNpbW9qYy9waHBhcGkvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTUyMjM2NTk2NSwiZXhwIjoxNTIyMzY5NTY1LCJuYmYiOjE1MjIzNjU5NjUsImp0aSI6IlpKWURPRW85cmpWRzk1akkifQ.1aoIjQ0CICGn307tYc50iDVvEsn_vg1VZBH9yowMZ30"

  private endpointUrl = environment.API_URL;

  constructor(private http: Http) { }

  getEvnmts(): Observable<IEvnmt[]> {
    return this.http.get(this.endpointUrl + "evnmts")
      .map((response: Response) => <IEvnmt[]>response.json())
      //  .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

      getEvnmt(id: number): Observable<IEvnmt> {
        return this.http.get(this.endpointUrl + "evnmts/" + id).map((response: Response) => {
          return <IEvnmt>response.json()
        }).catch(this.handleError)
    }

    getLocation(id: number): Observable<ILocation> {
      return this.http.get(this.endpointUrl + "locations/" + id).map((response: Response) => {
        return <ILocation>response.json()
      }).catch(this.handleError)
  }

  saveEvnmt(evnmt): Observable<IEvnmt> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    return this.http.post(this.endpointUrl + "evnmts", JSON.stringify(evnmt),
      options).map((response: Response) => {
        return response.json()
      }).catch(this.handleError)
  }


  private handleError(error: Response) {
    return Observable.throw(error.statusText)
  }

}
