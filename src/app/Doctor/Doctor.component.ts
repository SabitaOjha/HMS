import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-Doctor',
  templateUrl: './Doctor.component.html',
  styleUrls: ['./Doctor.component.css']
})
export class DoctorComponent implements OnInit {
  title = 'Hms';
  viewDoctor:any;
  viewPatients:any;
  constructor(private apiservice:ApiCallService){}
  ngOnInit(): void {
   this.listDoctor();
  }
  listDoctor(){
    this.apiservice.GetDoctor().subscribe(
      res=>{
        this.viewDoctor = res;
        console.log(this.viewDoctor);
      },
      err=>{
        console.log(err);
      }
    );
  }
  // getPatientsId(id:any){
  //   this.apiservice.SendPId(id);
  // }

  }
