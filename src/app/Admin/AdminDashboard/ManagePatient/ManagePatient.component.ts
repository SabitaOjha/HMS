import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCallService } from 'src/app/api-call.service';
import { Appointments } from 'src/app/Model/Appointment';


@Component({
  selector: 'app-ManagePatient',
  templateUrl: './ManagePatient.component.html',
  styleUrls: ['./ManagePatient.component.css']
})

export class ManagePatientComponent implements OnInit{
  ngOnInit(): void {
      this.listPatients();
  }
  patient:Appointments = new Appointments();
  title = 'Hms';
  viewPatients:any;
  patId:any;
  constructor(private apiservice:ApiCallService){}
  listPatients(){
    this.apiservice.GetPatients().subscribe(
      res=>{
        this.viewPatients = res;
        console.log(this.viewPatients);
      },
      err=>{
        console.log(err);
      }
    );
  }
  viewPatientsById(id:any){
    this.apiservice.GetPatientById(id).subscribe(
        res=>{
            this.fetchPatById(id);
            console.log(res);
            this.patient.AppointmentForm = new FormGroup({
              FirstName: new FormControl (res['firstName']),
              LastName: new FormControl (res['lastName']),
              Address: new FormControl (res['address']),
              Age: new FormControl (res['specialization']),
              PhoneNumber: new FormControl (res['phoneNumber']),
              Symptoms: new FormControl (res['symptoms'])
            });
        },
        err=>{
            console.log(err);
        }
    );
  }
  editDoctor(){
    let patientData = this.patient.AppointmentForm.value;
    this.apiservice.UpdatePatient(this.patId, patientData).subscribe(
        res=>{
            console.log(res);
            window.location.reload();
        },
        err=>{
            console.log(err);
        }
    );
  }
  fetchPatById(id:any){
    this.patId = id;
    console.log(this.patId);
  }
removePatient(id:any){
  this.apiservice.DeletePatient(id).subscribe(
    res=>{
      this.listPatients();
    },
    err=>{
      console.log(err);
    }
  );
}

}
