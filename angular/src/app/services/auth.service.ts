import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class AuthService {
	private BASE_URL: string = 'http://localhost:5000/auth';
	private headers: Headers = new Headers({'content-type': 'application/json'})
	constructor(private http: Http){}

	login(user): Promise <any> {
		let url: string = `$(this.BASE_URL)/login`;
		return this.http.post(url, user, {headers:
								 this.headers}).toPromise();
	}

	register(user): Promise <any>{
		let url: string = `$(this.BASE_URL)/register`;
		return this.http.post(url, user, {headers:
								this.headers}).toPromise();
	}
}


//http://www.pybloggers.com/2017/08/user-authentication-with-angular-4-and-flask/