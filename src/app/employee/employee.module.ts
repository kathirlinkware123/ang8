import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [EmployeecreateComponent, EmployeelistComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
