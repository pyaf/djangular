import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class AuthService {
  public headers: Headers = new Headers({
        'content-type': 'application/json',
        'X-CSRFToken': this.cookieservice.get('csrftoken')
      })  	

  constructor(private http: Http, private cookieservice: CookieService ){}

	login(user): Promise <any> {
		let url: string = '/api-login-user/';
		console.log(document.cookie['csrftoken']);
		return this.http.post(url, user, {headers:
								 this.headers}).toPromise();
	}

	register(user): Promise <any>{
		let url: string = '/api-register-user/';
		return this.http.post(url, user, {headers:
								this.headers}).toPromise();
	}

}


//http://www.pybloggers.com/2017/08/user-authentication-with-angular-4-and-flask/