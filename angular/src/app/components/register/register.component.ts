import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  public user = new User(null, null, null);

  ngOnInit() {
  
  }
    get diagnostic() { return JSON.stringify(this.user); }

}
