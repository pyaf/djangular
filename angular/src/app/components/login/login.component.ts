import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  test: string = "just a test";

  constructor(private auth: AuthService){}

  ngOnInit(): void{
  }

}

/* In Angular 4, we define a component by wrapping a config object with an @Component
 decorator. We can share code between packages by importing the classes we need; and, 
 in this case, we import Component from the @angular/core package. The LoginComponent 
 class is the component’s controller, and we use the export operator to make it available
 for other classes to import. */