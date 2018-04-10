import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser, IRpnpers } from '../Models/index'
import { AlertService } from '../_services/index';
//import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class RpnpersService {
    currentUser: IUser;
    constructor(private http: HttpClient, private http2:Http) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

   //private endpointUrl = "http://localhost/~simojc/phpapi/public/api/"
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

    getById(_id: string) {
        return this.http.get(this.endpointUrl + 'rpnpers/' + _id);
    }
 
    delete(_id: string) {
        return this.http.delete(this.endpointUrl + 'rpnpers/' + _id);
    }


    getPersByMail(_mail: string) {
        return this.http.get(this.endpointUrl + 'getPersByMail/' + _mail);
    }

}
