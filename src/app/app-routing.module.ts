import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/Admin.component';
import { DoctorComponent } from './Doctor/Doctor.component';
import { Final_ReportComponent } from './Final_Report/Final_Report.component';
import { HomeComponent } from './Home/Home.component';
import { MedicineComponent } from './Medicine/Medicine.component';
import { Doctor } from './Model/Doctors';
import { PatientComponent } from './Patient/Patient.component';
import { PatientListComponent } from './PatientList/PatientList.component';
import { AboutComponent } from './About/About.component';


const routes: Routes = [
  {
    path: "Admin", component:AdminComponent
   },
 {
  path: 'Admin',
    loadChildren: () => import('./Admin/Admin.module').then(m => m.AdminModule)
 },

 {
  path: '', component:HomeComponent
 },
 
{
  path: 'About', component:AboutComponent
},

{
  path: "Doctor", component:DoctorComponent
},
{
  path: "Patient", component:PatientComponent
},
{
  path: "medicine/:id", component:MedicineComponent
},
{
  path: "PatientList", component:PatientListComponent
},
{
  path: "finalReport/:id", component:Final_ReportComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const components = [HomeComponent,AboutComponent,PatientComponent,
                          AdminComponent,DoctorComponent,MedicineComponent,
                          PatientListComponent,Final_ReportComponent]
