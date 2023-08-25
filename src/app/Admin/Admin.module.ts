import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './Admin-routing.module';
import { AdminComponent } from './Admin.component';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { ManageDoctorComponent } from './ManageDoctor/ManageDoctor.component';
import { ManagePatientComponent } from './AdminDashboard/ManagePatient/ManagePatient.component';
import { LoginComponent } from './Login/Login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    ManageDoctorComponent,
    ManagePatientComponent
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
 
   
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
