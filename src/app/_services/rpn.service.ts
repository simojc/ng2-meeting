import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import { IUser, IRpnpers, IPers } from '../Models/index'
import { AlertService } from './alert.service'
import {  AutresService } from './autres.service'
//import { AuthService } from './auth.service'
import { environment } from '../../environments/environment';

@Injectable()
export class RpnpersService {

    constructor(private http: HttpClient, private autresService: AutresService) { 
    }

    private endpointUrl = environment.API_URL;
    
    getAll(resp_id: number) {
     // console.log(this.endpointUrl + 'rpnpers/resp_id');
        return this.http.get<IRpnpers[]>(this.endpointUrl + "rpnpers?resp_id=" + resp_id);
        //return this.http.get(this.endpointUrl + "pers?type='M' & groupe=" + this.currentUser.groupe_id)
    }

    addRpnpers(rpnpers) {
      const uri = this.endpointUrl + 'rpnpers';
      this.http.post(uri, rpnpers).subscribe(
        res => console.log('Creation reussi'));
    }

    editRpnpers(id) {
      const uri = this.endpointUrl + "rpnpers/" + id;
      //console.log(uri);
      return this
        .http
        .get(uri)
        .map(res => {
          return res;
        });
    }

    updateRpnpers(rpnpers, id) {
      console.log('rpnpers = ' + JSON.stringify(rpnpers))
      const uri = this.endpointUrl + "rpnpers/" + id;
      this
        .http
        .put(uri, rpnpers)
        .subscribe(res => console.log('Done'));
    }

    private handleError(error: Response) {
        return Observable.throw(error)
      }


    delete(_id: string) {
        return this.http.delete(this.endpointUrl + 'rpnpers/' + _id);
    }

}
