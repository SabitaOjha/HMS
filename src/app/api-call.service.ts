
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointments } from './Model/Appointment';
import { Doctor } from './Model/Doctors';
import { Login } from './Model/Login';
import { Medicine } from './Model/Medicine';
import { Problems } from './Model/Problems';
import { Register } from './Model/Register';

@Injectable({
  providedIn: 'root',
})
export class  ApiCallService {

  constructor(private http:HttpClient)  {}

  Register(adminData:Register):Observable<any>{
    return this.http.post("https://localhost:7022/api/Authentication/Register" ,adminData,{responseType: 'json'})
  }
  Login(loginData:Login):Observable<any>{
    return this.http.post("https://localhost:7022/api/Authentication/Login" ,loginData,{responseType:'json'})
  }
  PostDoctor(doctorData:Doctor):Observable<any>{
    return this.http.post("https://localhost:7022/api/Doctor/PostDoctor" ,doctorData,{responseType:'json'})
  }
  GetDoctor():Observable<any>{
    return this.http.get("https://localhost:7022/api/Doctor" ,{responseType:'json'})
  }
  GetDoctorById(Did:any):Observable<any>{
    return this.http.get("https://localhost:7022/api/Doctor/"+Did,{responseType: 'json'})
  }
  UpdateDoctor(id:any, doctorData:Doctor):Observable<any>{
    return this.http.put("https://localhost:7022/api/Doctor/"+id,doctorData,{responseType: 'json'} )
  }
  DeleteDoctor(id:any):Observable<any>{
    return this.http.delete("https://localhost:7022/api/Doctor/"+id, {responseType:'json'} )
  }
  PostAppointment(appointmentInfo:Appointments,doctorId:any):Observable<any>{
    return this.http.post("https://localhost:7022/api/Patient/"+doctorId,appointmentInfo,{responseType: 'json'})
  }
  GetPatients():Observable<any>{
    return this.http.get("https://localhost:7022/api/Patient" ,{responseType:'json'} )
  }
  GetPatientById(pid:any):Observable<any>{
    return this.http.get("https://localhost:7022/api/Patient/"+pid, {responseType: 'json'})
  }
  UpdatePatient(id:any,patientData:Appointments):Observable<any>{
    return this.http.put("https://localhost:7022/api/Patient/"+id,patientData,{responseType: 'json'} )
  }
  DeletePatient(id:any):Observable<any>{
    return this.http.delete("https://localhost:7022/api/Patient/"+id, {responseType:'json'} )
  }
  PostProblems(pid:any,problem:Problems ):Observable<any>{
    return this.http.post("https://localhost:7022/api/Problems/"+pid,problem, {responseType: 'json'})
  }
  GetProblemByPid(id:any):Observable<any>{
    return this.http.get("https://localhost:7022/api/Problems/"+id, {responseType: 'json'})
  }
  PostMedicine(probId:any, medicine:Medicine):Observable<any>{
    return this.http.post("https://localhost:7022/api/Medicine/"+probId, medicine, {responseType: 'json'})
  }
  // GetMedicineByProblemId(problemId:any):Observable<any>{
  //   return this.http.get("https://localhost:7022/api/Medicine/"+problemId, {responseType: 'json'})
  // }
  // GetProblemsByPatientId(patId:any):Observable<any>{
  //   return this.http.get("https://localhost:7022/api/Problems/GetProblems"+patId, {responseType: 'json'})
  // }
}