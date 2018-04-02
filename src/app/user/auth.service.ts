
	import { Injectable } from '@angular/core'

	import { Observable } from 'rxjs/Observable'
	import { Subject } from 'rxjs/Subject'

	import { Http, Response, Headers, RequestOptions } from '@angular/http'

	import { IUser } from './user.model'

	@Injectable()
	export class AuthService {

		public currentUser: IUser

		public currentEmail: string


		private endpointUrl ="http://localhost/~simojc/phpapi/public/api/login"

	  constructor(private http: Http) { }

						loginUser(courriel: string, motpass: string) {
										let headers = new Headers({ 'Content-Type': 'application/json' })
										let options = new RequestOptions({ headers: headers })

										let loginInfo = { email: courriel, password: motpass }

										return this.http.post(this.endpointUrl, JSON.stringify(loginInfo), options).do(resp => {
											if (resp) {
											this.currentUser = <IUser>resp.json().user
											}
										}).catch(error => {
											return Observable.of(false)
										})
						}

						loginUser1(courriel: string, motpass: string) {
					     return new Promise((resolve, reject) => {
								 let headers = new Headers({ 'Content-Type': 'application/json' })
								 let options = new RequestOptions({ headers: headers })

								 let loginInfo = { email: courriel, password: motpass }

					       this.http
					         .post(this.endpointUrl, JSON.stringify(loginInfo), options)
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
					         .subscribe(data => { resolve(data)
									 this.currentEmail = courriel
								 })

					     })
					   }



	  isAuthenticated() {
		return !!this.currentEmail
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

		let url = `/api/update`

		return this.http.put(url, JSON.stringify(this.currentUser), options)
	  }

	  /// Pour donner ou retirer les droit d'admin à un utilisateur
	 updateUser(user:IUser) {
		let headers = new Headers({ 'Content-Type': 'application/json' })
		let options = new RequestOptions({ headers: headers })

		let url = `/api/users/${this.currentUser.id}`

		return this.http.put(url, JSON.stringify(user), options)
	  }

	  //////////

	  logout() {

		this.currentUser = undefined

		let headers = new Headers({ 'Content-Type': 'application/json' })
		let options = new RequestOptions({ headers: headers })

		let url = `/api/logout`

		return this.http.post(url, JSON.stringify({}), options)
	  }


	}
