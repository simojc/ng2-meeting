import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser , IGroupe, ILocation} from '../Models/index';
//import { AlertService } from '../_services/index';
//import { AuthService } from '/../auth.service'

@Injectable()
export class AutresService {
    currentUser: IUser
    
    constructor(private http: HttpClient) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    private endpointUrl ="http://localhost/~simojc/phpapi/public/api/"
    //private endpointUrl = api/locations;
    
    getLocations() {
        return this.http.get<ILocation[]>(this.endpointUrl + 'locations');
    }

    getGroupes() {
        return this.http.get<IGroupe[]>(this.endpointUrl + 'groupes');
    }

    private handleError(error: Response) {
        return Observable.throw(error)
      }

    getLocationById(_id: string) {
        return this.http.get(this.endpointUrl + 'locations/' + _id);
    }

    getGroupeById(_id: string) {
        return this.http.get(this.endpointUrl + 'groupes/' + _id);
    }
 
}