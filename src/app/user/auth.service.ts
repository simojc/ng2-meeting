
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { IUser } from './user.model'

@Injectable()
export class AuthService {

    public currentUser: IUser

    constructor(private http: Http) { }
   
    loginUser(userName: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        let loginInfo = { username: userName, password: password }

       // let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`

        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do(resp => {
            if (resp) {
                this.currentUser = <IUser>resp.json().user
            }
        }).catch(error => {
            return Observable.of(false)
        })
    }

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
            if (currentUser.userName) {
                this.currentUser = currentUser
            }
        }).subscribe()
    }


    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName

        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        let url = `/api/users/${this.currentUser.id}`

        return this.http.put(url, JSON.stringify(this.currentUser),options)
     
    }

    logout() {

        this.currentUser = undefined

        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        let url = `/api/logout`

        return this.http.post(url, JSON.stringify({}), options)
    }

  
}