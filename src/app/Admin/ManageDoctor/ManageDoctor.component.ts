import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCallService } from 'src/app/api-call.service';
import { Doctor } from 'src/app/Model/Doctors';

@Component({
  selector: 'app-ManageDoctor',
  templateUrl: './ManageDoctor.component.html',
  styleUrls: ['./ManageDoctor.component.css']
})
export class ManageDoctorComponent implements OnInit{
  ngOnInit(): void {
      this.listDoctor();
  }
  doctor:Doctor = new Doctor();
  title = 'Hms';
  viewDoctor:any;
  docId:any;
  constructor(private apiservice:ApiCallService){}
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
  viewDoctorById(id:any){
    this.apiservice.GetDoctorById(id).subscribe(
        res=>{
            this.fetchDocById(id);
            console.log(res);
            this.doctor.DoctorForm = new FormGroup({
              FirstName: new FormControl (res['firstName']),
              LastName: new FormControl (res['lastName']),
              Address: new FormControl (res['address']),
              Specialization: new FormControl (res['specialization']),
              PhoneNumber: new FormControl (res['phoneNumber'])
            });
        },
        err=>{
            console.log(err);
        }
    );
  }
  editDoctor(){
    let doctorData = this.doctor.DoctorForm.value;
    this.apiservice.UpdateDoctor(this.docId, doctorData).subscribe(
        res=>{
            console.log(res);
            window.location.reload();
        },
        err=>{
            console.log(err);
        }
    );
  }
  fetchDocById(id:any){
    this.docId = id;
    console.log(this.docId);
  }
removeDoctor(id:any){
  this.apiservice.DeleteDoctor(id).subscribe(
    res=>{
      this.listDoctor();
    },
    err=>{
      console.log(err);
    }
  );
}

}
