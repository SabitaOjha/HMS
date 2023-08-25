import { Component, OnInit } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { ApiCallService } from 'src/app/api-call.service';
import { Doctor } from 'src/app/Model/Doctors';

@Component({
  selector: 'app-AdminDashboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  doctor:Doctor = new Doctor();
  viewPatients:any;
 patsn:any = 0;
  docId:any;
  viewDoctor: any;
  Did:any;
   docName: any[] = [];
  constructor(private apiservice:ApiCallService){}
  ngOnInit(): void {
    this.listRecentAppointments();
    // this.listDoctor();
  }

  // listDoctor(){
  //   this.apiservice.GetDoctor().subscribe(
  //     res=>{
  //       this.viewDoctor = res;
  //       console.log(this.viewDoctor);
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )
  // }
  registerDoctor(){
    let doctorData = this.doctor.DoctorForm.value;
    this.apiservice.PostDoctor(doctorData).subscribe(
      res=>{
        alert("Doctor is added successfully");
      },
      err=>{

        console.log(err);
      }
    );
  }
  listRecentAppointments(){
    this.apiservice.GetPatients().subscribe(
      res=>{
    
        let value= res.map((item:any)=>{
            return item.doctorId;
        });
        for(let i=0; i<value.length; i++){
          this.Did = value[i];
         
          this.fetchDoctorById();
          console.log(this.Did);
        }
        this.viewPatients = res;
        this.patsn = this.patsn +1;
        console.log(value)
        // console.log(res);
      }, 
      err=>{
        console.log(err);
      }
    );
  }
  fetchDoctorById(){
    this.apiservice.GetDoctorById(this.Did).subscribe(
      res=>{
        this.docName = res;
      },
      err=>{
        console.log(err);
      }
    );
  }


}
