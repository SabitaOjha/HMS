import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiCallService } from '../api-call.service';
import { Appointments } from '../Model/Appointment';
import { Medicine } from '../Model/Medicine';
import { Problems } from '../Model/Problems';

@Component({
  selector: 'app-Medicine',
  templateUrl: './Medicine.component.html',
  styleUrls: ['./Medicine.component.css']
})
export class MedicineComponent implements OnInit{
  patId:any;
  title = 'Hms';
  Patients:any;
  Problems:any;
  problemId:any;
  Medicines:any;
  //appointment:Appointments = new Appointments();
  problem:Problems = new Problems();
  medicine:Medicine = new Medicine();
  constructor(private apiservice:ApiCallService, private actRoute:ActivatedRoute){  }
    ngOnInit(): void {
        this.patId=this.actRoute.snapshot.params['id'];
        // console.log(this.patId);
        this.fetchPatientsId();
        // this.fetchMedicineByProblemId();
        this.fetchProblemsByPatientId();
       
    }
    fetchPatientsId(){
     
      this.apiservice.GetPatientById(this.patId).subscribe(
        res=>{
          this.Patients = res;
          this.Problems = res.problems;
        },
        err=>{
          console.log(err);
        }
      );
    }
    postProblem(){
      this.apiservice.PostProblems(this.patId,this.problem).subscribe(
        res=>{
        
          // console.log(res);
         this.fetchProblemById();
        },
        err=>{
          console.log(err);
        }
        
      );
    }

fetchProblemById(){
  this.apiservice.GetProblemByPid(this.patId).subscribe(
    res=>{
      console.log("hlo problem by id");
      console.log(res);
    },
    err=>{
      console.log(err);
    }
  );
}
postMedicine(){
this.apiservice.PostMedicine(this.problemId,this.medicine).subscribe(
  res=>{
  alert("Medicine has been added sucessfully");
  window.location.reload();
    console.log(this.problemId);
    // this.fetchMedicineByProblemId();
    this.fetchProblemsByPatientId();
  },
  err=>{
    console.log(err);
  }
);
}
fetchProblemsByPatientId(){
  this.apiservice.GetProblemByPid(this.patId).subscribe(
    res=>{
      console.log("hey");
      console.log(res);
    },
    err=>{
      console.log(err);
    }
  )
}
// fetchMedicineByProblemId(){
//   this.apiservice.GetMedicineByProblemId(this.problemId).subscribe(
//     res=>{
//       this.Medicines = res;
//       console.log("hlo");
//       console.log(res);
//     },
//     err=>{
//       console.log(err);
//     }
//   );
// }
ProblemsId(event:any){
  this.problemId = event.target.value;
  console.log(this.problemId);
}

}
