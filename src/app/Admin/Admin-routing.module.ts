import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { ManageDoctorComponent } from './ManageDoctor/ManageDoctor.component';
import { ManagePatientComponent } from './AdminDashboard/ManagePatient/ManagePatient.component';
import { LoginComponent } from './Login/Login.component';



const routes: Routes = [
  
  {
    path:"Login", component:LoginComponent
},
{
  path: "AdminDashboard", component:AdminDashboardComponent
},
{
  path: "ManageDoctor", component:ManageDoctorComponent
},
{
  path: "ManagePatient", component:ManagePatientComponent
}


];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{ }
