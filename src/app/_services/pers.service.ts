import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser } from '../Models/index'
import { AlertService } from '../_services/index';
//import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class PersService {
    currentUser: IUser;
    constructor(private http: HttpClient, private http2:Http) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

   //private endpointUrl = "http://localhost/~simojc/phpapi/public/api/"
    private endpointUrl = environment.API_URL;
    
    getAll() {
        return this.http.get<IUser[]>(this.endpointUrl + 'users');
    }

    private handleError(error: Response) {
        return Observable.throw(error)
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
