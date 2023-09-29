import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './taskAll/task-list/task-list.component';
import { EmployeeComponent } from './employeeAll/employee/employee.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';

//When someone inserts the direct path on the URL below shows what part to be accessed.
const routes: Routes = [{ path: 'login', component: LoginComponent },// const because limited number of pages to be routed on
{ path: 'dashboard', component: DashboardComponent },
{ path: 'sprint', component: SprintListComponent },
{ path: 'task', component: TaskListComponent },
{ path: 'employee', component: EmployeeComponent },
// Add route guards for authentication here
{ path: '', redirectTo: '/login', pathMatch: 'full' }]; //Redirects to login page by default

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
