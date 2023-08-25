import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
import { Login } from 'src/app/Model/Login';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html'

})
export class LoginComponent {
  title = 'Hms';
  login:Login = new Login();
  constructor(private apiservice:ApiCallService, private router: Router){}
doLogin(){
    let loginData = this.login.LoginForm.value;
    this.apiservice.Login(loginData).subscribe(
        res=>{
           alert("You are logged in sucessfully");
          this.router.navigate(['/Admin/AdminDashboard']);
           
        },
        err=>{
            console.log(err);
        }
    );
}
}
