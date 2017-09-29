import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule  } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
    	{ path: 'login', component: LoginComponent }
    	])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }


/*
Take note of the AppModule within app.module.ts. This is used to bootstrap the Angular app.
The @NgModule decorator takes metadata that lets Angular know how to run the app.
Everything that we create in this tutorial will be added to this object.
 */
