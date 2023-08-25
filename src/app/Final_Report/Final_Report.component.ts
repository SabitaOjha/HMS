import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiCallService } from "../api-call.service";
@Component({
    selector: 'app-Final_Report',
    templateUrl: './Final_Report.component.html',
    styleUrls: ['./Final_Report.component.css']
})
export class Final_ReportComponent implements OnInit{
    patId:any;
    patients:any;
    problems:any;
    constructor(private apiservice:ApiCallService,  private actRoute:ActivatedRoute){}
    
    ngOnInit(): void {
        this.patId=this.actRoute.snapshot.params['id'];
        this.fetchPatientById();
        this.fetchProblemsByPatientId();
        

    }

    fetchPatientById(){
     
        this.apiservice.GetPatientById(this.patId).subscribe(
          res=>{
            this.patients = res;
            console.log("yap");
            console.log(this.patients);
          },
          err=>{
            console.log(err);
          }
        );
      }
      fetchProblemsByPatientId(){
        this.apiservice.GetProblemByPid(this.patId).subscribe(
          res=>{
            this.problems = res;
            console.log(res);
          },
          err=>{
            console.log("what error");
            console.log(err);
          }
        );
   }
    }
