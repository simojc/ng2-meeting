
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IEvnmt, IEvnmtdtl } from '../../Models/index';

import { environment } from '../../../environments/environment';

@Injectable()
export class EvnmtService {

  // private endpointUrl = environment.API_URL;
  private endpointUrl = environment.API_URL_NODEJS;

  constructor(private http: Http) { }

  getEvnmts(): Observable<IEvnmt[]> {
    return this.http.get(this.endpointUrl + 'evnmts')
      .map((response: Response) => <IEvnmt[]>response.json())
      //  .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getEvnmt(id: number): Observable<IEvnmt> {
    return this.http.get(this.endpointUrl + 'evnmt/' + id).map((response: Response) => {
      return <IEvnmt>response.json();
    }).catch(this.handleError);
  }

  saveEvnmt(evnmt): Observable<IEvnmt> {
    console.log(this.endpointUrl + 'evnmts,' + JSON.stringify(evnmt));
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.endpointUrl + 'evnmts', JSON.stringify(evnmt),
      options).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
