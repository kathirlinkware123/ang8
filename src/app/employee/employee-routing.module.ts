import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeelistComponent} from './employeelist/employeelist.component';
import {EmployeecreateComponent} from './employeecreate/employeecreate.component';

const routes: Routes = [
    { path: '', component: EmployeelistComponent },
    { path: 'create', component: EmployeecreateComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
