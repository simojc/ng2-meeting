import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser, IRpnpers, IPers } from '../Models/index'
import { AlertService } from './alert.service'
import {  AutresService } from './autres.service'
//import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class RpnpersService {

    constructor(private http: HttpClient, private http2: Http, private autresService: AutresService) { 
    }

    private endpointUrl = environment.API_URL;
    
    getAll(resp_id: number) {
     // console.log(this.endpointUrl + 'rpnpers/resp_id');
        return this.http.get<IRpnpers[]>(this.endpointUrl + 'rpnpers/' + resp_id);
    }

    query(resp_id: number) {
      return this.http.get(this.endpointUrl + 'rpnpers/' + resp_id).toPromise()
          .then((resp: Response) => ({
              items: resp.json(),
              count: Number(resp.headers.get('X-Total-Count'))
          }));
    }

    //getUsers(): Observable<IUser[]> {
    //    let headers = new Headers();
    //    headers.append('x-access-token', this.auth.getToken());
    //   // console.log("this.auth.getToken() = "+this.auth.getToken())
    //    return this.http2.get(this.endpointUrl + 'users', {headers: headers})
    //        .map((response: Response) => <IUser[]>response.json())
    //       // .do(data => console.log('All: ' + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}

    private handleError(error: Response) {
        return Observable.throw(error)
      }

    getById(_id: number) {
      return this.http.get<IRpnpers>(this.endpointUrl + 'rpnpers/' + _id);
    }

    getAllRpnpersPers(pers_id: string) {
      return this.http.get<IRpnpers[]>(this.endpointUrl + 'rpnpers/' + pers_id);
    }
 
    delete(_id: string) {
        return this.http.delete(this.endpointUrl + 'rpnpers/' + _id);
    }

}
