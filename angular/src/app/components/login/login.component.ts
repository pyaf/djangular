import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, public cookieservice: CookieService){}
  public user: any = new User(null, null, null);

  ngOnInit(): void{
  }
  
  LoginUser(){
  	console.log("login user");
    this.auth.login(this.user)
    .then((data)=>{
      console.log(data);
      if(data.status==200){
        if(data.json()['status']=='success'){
          this.cookieservice.put('token', data.json()['token']);
        }else{
          console.log('Invalid Credentials');
        }
      }
      else{
        console.log("Some error occured")
      }
    })
  	
  }
    get diagnostic() { return JSON.stringify(this.user); }

}

/* In Angular 4, we define a component by wrapping a config object with an @Component
 decorator. We can share code between packages by importing the classes we need; and, 
 in this case, we import Component from the @angular/core package. The LoginComponent 
 class is the component’s controller, and we use the export operator to make it available
 for other classes to import. */