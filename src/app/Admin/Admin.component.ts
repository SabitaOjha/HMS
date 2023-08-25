import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Login } from '../Model/Login';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent {
  title = 'Hms';
  login:Login = new Login();
  constructor(private apiservice:ApiCallService){}
  doLogin(){
    let loginData = this.login.LoginForm.value;
    this.apiservice.Login(loginData).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }
}
