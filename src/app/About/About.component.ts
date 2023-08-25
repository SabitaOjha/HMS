import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';


@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent{

  title = 'Hms';
 

  // registerAdmin(){
  //   let adminData = this.registerReq.RegisterForm.value;
  //   this.apiservice.Register(adminData).subscribe(
  //           res=>{
  //             console.log(res);
  //           },
  //           err=>{
  //             console.log(err);

  //           }
  //   )
  //   }
}
