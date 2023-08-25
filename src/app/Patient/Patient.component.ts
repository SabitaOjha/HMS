import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Appointments } from '../Model/Appointment';

@Component({
  selector: 'app-Patient',
  templateUrl: './Patient.component.html',
  styleUrls: ['./Patient.component.css']
})
export class PatientComponent implements OnInit{
  title = 'Hms';
  // faPeopleGroup = faPeopleGroup;
  // faEdit = faEdit;
  doctorList: any;
  doctorId:any;
  patients:any;
  appointment:Appointments = new Appointments();
  constructor(private apiservice:ApiCallService){}
  ngOnInit(): void {
    this.listDoctor();
    this.fetchPatients();
  }
  bookAppointment(){
    let appointmentInfo = this.appointment.AppointmentForm.value;
    console.log(appointmentInfo);
    console.log(this.doctorId);
    this.apiservice.PostAppointment(appointmentInfo,this.doctorId).subscribe(
      res=>{
        alert("Appointment has been booked successfully");
        console.log(res.FirstName);
        window.location.reload();
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );

  }
  listDoctor(){
    this.apiservice.GetDoctor().subscribe(
      res=>{
        this.doctorList = res;
        console.log(this.doctorList);
      },
      err=>{
        console.log(err);
      }
    );
  }
  Doctor(event:any){
this.doctorId = event.target.value;
  }
  fetchPatients(){
    this.apiservice.GetPatients().subscribe(
      res=>{
        this.patients = res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }
}
