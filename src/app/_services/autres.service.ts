import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser, IGroupe, ILocation, IPers} from '../Models/index';
//import { AlertService } from '../_services/index';
//import { AuthService } from '/../auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class AutresService {
    currentUser: IUser
    
    constructor(private http: HttpClient) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
    //private endpointUrl = api/locations;
    private endpointUrl = environment.API_URL;
    
    getLocations() {
        return this.http.get<ILocation[]>(this.endpointUrl + 'locations');
    }

    getGroupes() {
        return this.http.get<IGroupe[]>(this.endpointUrl + 'groupes');
    }

    private handleError(error: Response) {
        return Observable.throw(error)
      }

    getLocationById(_id: number) {
        return this.http.get(this.endpointUrl + 'locations/' + _id);
    }

    getGroupeById(_id: number) {
        return this.http.get(this.endpointUrl + 'groupes/' + _id);
    }

    // getPersCurrentPers() {
    //    // console.log("  this.endpointUrl + 'pers?email = ' + this.currentUser.email  = "+this.endpointUrl + 'pers?email=' + this.currentUser.email)
    //   return this.http.get<IPers>(this.endpointUrl + 'pers?email=' + this.currentUser.email)
    //   .map((response: Response) => <IPers>response.json())
    //   //.do(data => console.log('Event: ' + JSON.stringify(data)))
    //   .catch(this.handleError)
    // }

    getPersCurrentPers(): Observable<IPers> {
        return this.http.get(this.endpointUrl + 'pers?email=' + this.currentUser.email)
        .map((response: Response) =>  {
          //  console.log('Pers: ' + JSON.stringify(response));
           return response
        })  
      //  .do(data => console.log('Pers: ' + JSON.stringify(data)))
        .catch(this.handleError)
      }


      getPersCurrentPers2() {
        return this.http.get<IPers>(this.endpointUrl + 'pers?email=' + this.currentUser.email);
    }
 
}
