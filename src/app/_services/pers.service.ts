import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser, IPers } from '../Models/index'
import { AlertService } from '../_services/index';
//import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class PersService {
    currentUser: IUser;
    constructor(private http: HttpClient, private http2:Http) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    private endpointUrl = environment.API_URL;
    
    getAll() {
      return this.http.get<IPers[]>(this.endpointUrl + 'pers');
    }

  	getPersByMail(): Observable<IPers> {
        return this.http.get(this.endpointUrl + 'pers?email=' + this.currentUser.email)
        .map((response: Response) =>  {         
           return response
        })  
        .catch(this.handleError)
      }
	  
	  getPersByType(): Observable<IPers[]> {
      console.log(this.endpointUrl + "pers?type='M' ")
        return this.http.get(this.endpointUrl + "pers?type='M' " )
        .map((response: Response) =>  {         
           return response
        })  
        .catch(this.handleError)
      }

    //getAll(resp_id: number) {
    //  // console.log(this.endpointUrl + 'rpnpers/resp_id');
    //  return this.http.get<IRpnpers[]>(this.endpointUrl + 'rpnpers/' + resp_id);
    //}

    getPersByRepdt(repdt_id: number) {
      return this.http.get<IPers>(this.endpointUrl + 'pers/' + repdt_id);
    }

    private handleError(error: Response) {
        return Observable.throw(error)
      }

    getById(_id: number) {
      return this.http.get<IPers>(this.endpointUrl + 'pers/' + _id);
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
