import { Component, OnInit } from "@angular/core";
import { ApiCallService } from "../api-call.service";
import { Appointments } from "../Model/Appointment";
import { Problems } from "../Model/Problems";
@Component({
    selector: 'app-PatientList',
    templateUrl: './PatientList.component.html',
    styleUrls: ['./PatientList.component.css']
})
export class PatientListComponent implements OnInit{
    appointment:Appointments = new Appointments();
    problem:Problems = new Problems();
    viewPatients:any;
    viewProblems:any;
    constructor(private apiservice:ApiCallService){}
    ngOnInit(): void {
       this.fetchPatientsRecord();
    }
fetchPatientsRecord(){
    this.apiservice.GetPatients().subscribe(
        res=>{
            this.viewPatients = res;
            console.log(res);
        },
        err=>{
            console.log(err);
        }
    );
}
}