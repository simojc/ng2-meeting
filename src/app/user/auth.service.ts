
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
//import { tokenNotExpired } from 'angular2-jwt';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { IUser } from '../Models/index'

@Injectable()
export class AuthService {

  public currentUser: IUser

  private endpointUrl = environment.API_URL;

  constructor(private http: Http, private http_cli: HttpClient) { }

  login_cli(email: string, password: string) {
    return this.http_cli.post<any>(this.endpointUrl + 'login', { email: email, password: password })
      .map(res => {
        // login successful if there's a jwt token in the response
        if (res && res.token) {
          console.log("Dans le service JSON.stringify(user) :" + JSON.stringify(res.token))
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(res.user));
          localStorage.setItem('token', JSON.stringify(res.token));
          this.currentUser = res.user;
          console.log("Dans le service currentUser email :" + JSON.stringify(this.currentUser.email))
        }

        return res;
      });
  }

  loginUser(courriel: string, motpass: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' })
      let options = new RequestOptions({ headers: headers })

      let loginInfo = { email: courriel, password: motpass }

      this.http
        .post(this.endpointUrl + 'login', JSON.stringify(loginInfo), options)
        .map(res => res.json())
        // This catch is very powerfull, it can catch all errors
        .catch((err: Response) => {
          // The err.statusText is empty if server down (err.type === 3)
          console.log((err.statusText || "Can't join the server."));
          // Really usefull. The app can't catch this in "(err)" closure
          reject((err.statusText || "Can't join the server."));
          // This return is required to compile but unuseable in your app
          return Observable.throw(err);
        })
        // The (err) => {} param on subscribe can't catch server down error so I keep only the catch
        .subscribe(data => {
          
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          localStorage.setItem('token', JSON.stringify(data.token));
          this.currentUser = data.user;
          console.log("Dans le service currentUser :" + JSON.stringify(this.currentUser))
          resolve(data)
        })

    })
  }


  public getToken(): string {
    return localStorage.getItem('token');
  }

  // public TokenEpired(): boolean {
  // 	// get the token
  // 	const token = this.getToken();
  // 	// return a boolean reflecting 
  // 	// whether or not the token is expired
  // 	return tokenNotExpired();
  // 	//var bool = jwtHelper.isTokenExpired(token);
  // 	//return tokenNotExpired(null, token);
  // }


  isAuthenticated() {
    return !!this.currentUser
    ///  returne True si current User est rensigné (c-d-d si la propriété n'est pas vide)
  }

  checkAuthenticationStatus() {
    return this.http.get('/api/currentIdentity').map((response: any) => {
      if (response._body) {  /// ce if est juste pour vérifier si la réponse n'est pas vide. '_body' n'est pas une propriété de response, mais son type
        return response.json()
      } else {
        return {}
      }
    }).do(currentUser => {
      if (currentUser.name) {
        this.currentUser = currentUser
      }
    }).subscribe()
  }

  updateCurrentUser(email: string, admin: boolean) {
    this.currentUser.email = email
    this.currentUser.admin = admin
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })
    let url = this.endpointUrl + "user/update";
    return this.http.put(url, JSON.stringify(this.currentUser), options)
  }

  /// Pour donner ou retirer les droit d'admin à un utilisateur
  updateUser(user: IUser) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    let url = `/api/users/${this.currentUser.id}`

    return this.http.put(url, JSON.stringify(user), options)
  }

  //////////

  logout() {

    this.currentUser = undefined

    localStorage.removeItem('currentUser');

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    let url = `/api/logout`

    return this.http.post(url, JSON.stringify({}), options)
  }

}
