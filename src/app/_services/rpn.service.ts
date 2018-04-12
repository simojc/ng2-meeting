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
  currentUser: IUser;
  currentPers: IPers;
    constructor(private http: HttpClient, private http2: Http, private autresService: AutresService) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.autresService.getPersCurrentPers().subscribe(pers => (this.currentPers = pers))
    }

    private endpointUrl = environment.API_URL;
    
    getAll() {
        return this.http.get<IRpnpers[]>(this.endpointUrl + 'rpnpers');
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
