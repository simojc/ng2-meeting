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

    private endpointUrl_PHP = environment.API_URL;
    private endpointUrl = environment.API_URL_NODEJS; // prob de CORS
    
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
        console.log(this.endpointUrl + "pers?type='M' & groupe=" + this.currentUser.groupe_id)
        return this.http.get(this.endpointUrl + "pers?type='M' & groupe=" + this.currentUser.groupe_id)
        .map((response: Response) =>  {
           return response
        })  
        .catch(this.handleError)
      }


    getPersByRepdt(repdt_id: number) {
      return this.http.get<IPers>(this.endpointUrl + 'pers/' + repdt_id);
    }

    private handleError(error: Response) {
        return Observable.throw(error)
      }

    getById(_id: number) {
      return this.http.get<IPers>(this.endpointUrl + 'pers/' + _id);
    }

    addPersonne(personne: IPers) {
      console.log("personne = "+ JSON.stringify(personne))
      const uri = this.endpointUrl + 'pers';
      this.http.post(uri, personne).subscribe(
        res => console.log('Creation reussi'));
    }

    editPersonne(id) {
      const uri = this.endpointUrl + "pers/" + id;
      //console.log(uri);
      return this
        .http
        .get(uri)
        .map(res => {
          return res;
        });
    }

    updatePersonne(personne, id) {
      const uri = this.endpointUrl + "pers/" + id;
     // console.log('uri = '+JSON.stringify(uri))
      this
        .http
        .put(uri, personne)
        .subscribe(res => console.log('Done'));
    }

    deletePersonne(id) {
      const uri = this.endpointUrl + "pers/delete/" + id;
      return this
        .http
        .get(uri)
        .map(res => {
          return res;
        });
    }
}
