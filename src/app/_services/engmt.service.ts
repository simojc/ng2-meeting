import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser, IEngmt } from '../Models/index'
import { AlertService } from '../_services/index';
//import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class EngmtService  {
    currentUser: IUser;
    constructor(private http: HttpClient, private http2:Http) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

   //private endpointUrl = "http://localhost/~simojc/phpapi/public/api/"
    private endpointUrl = environment.API_URL;
    
    getAll() {
      return this.http.get<IEngmt[]>(this.endpointUrl + 'engmts');
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
      return this.http.get<IEngmt>(this.endpointUrl + 'engmts/' + _id);
    }

    getAllEngmtPers(pers_id: number) {
      return this.http.get<IEngmt[]>(this.endpointUrl + 'engmts/' + pers_id);
    }
 
    create(user: IUser) {
        return this.http.post(this.endpointUrl + 'signup', user);
    }
 
    update(user: IUser) {
        return this.http.put(this.endpointUrl + '/users/' + user.id, user);
    }
 
    delete(_id: string) {
        return this.http.delete(this.endpointUrl + '/users/' + _id);
    }
}