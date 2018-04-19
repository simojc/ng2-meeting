import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser, ITont, ITontpers } from '../Models/index'
import { AlertService } from '../_services/index';
//import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class TontService {
    currentUser: IUser;
    constructor(private http: HttpClient, private http2:Http) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    private endpointUrl = environment.API_URL;
    
    getAll() {
      return this.http.get<ITont[]>(this.endpointUrl + 'tontpers');
    }

    private handleError(error: Response) {
        return Observable.throw(error)
      }

    getById(_id: number) {
      return this.http.get<ITont>(this.endpointUrl + 'tontpers/' + _id);
    }

    getAllTontPers(pers_id: number) {
      return this.http.get<ITontpers[]>(this.endpointUrl + 'tontpers/' + pers_id);
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
