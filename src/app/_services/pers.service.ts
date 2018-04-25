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
       // console.log(this.endpointUrl + "pers?type='M' & groupe=" + this.currentUser.groupe_id)
        return this.http.get(this.endpointUrl + "pers?type='M' & groupe=" + this.currentUser.groupe_id)
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

    addPersonne(personne: IPers) {
      const uri = this.endpointUrl + 'pers';
      this.http.post(uri, personne).subscribe(
        res => console.log('Creation reussi'));
    }

    addPersonne2(personne): Observable<IPers> {
      let headers = new Headers({ 'Content-Type': 'application/json' })
      let options = new RequestOptions({ headers: headers })
      return this.http2.post(this.endpointUrl + "pers", JSON.stringify(personne),
        options).map((response: Response) => {
          console.log(" Creation reussi  ")
          return response.json()
        }).catch(this.handleError)
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
    //  console.log('personne = '+JSON.stringify(personne))
      const uri = this.endpointUrl + "pers/" + id;
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
