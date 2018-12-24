import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser } from '../Models/index'
import { AlertService } from '../_services/index';
import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    currentUser: IUser;
    constructor(private http: HttpClient, private http2:Http, private auth: AuthService) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    private endpointUrl = environment.API_URL;

    private endpointUrl_Node = environment.API_URL_NODEJS; // prob de CORS

    getAll() {
        console.log(this.endpointUrl_Node + 'users');
        return this.http.get<IUser[]>(this.endpointUrl_Node + 'users');
    }

    getUsers(): Observable<IUser[]> {
        const headers = new Headers();
        headers.append('x-access-token', this.auth.getToken());
       // console.log("this.auth.getToken() = "+this.auth.getToken())
        return this.http2.get(this.endpointUrl + 'users', {headers: headers})
            .map((response: Response) => <IUser[]>response.json())
           // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
      }

    getById(_id: string) {
        return this.http.get(this.endpointUrl + 'users/' + _id);
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
