import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employeeAll/employee/employee.component';
import { FormsModule } from '@angular/forms';
// import { AddEmployeeComponent } from './employeeAll/add-employee/add-employee.component';
import { TaskListComponent } from './taskAll/task-list/task-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    TaskListComponent,
    NavbarComponent,
    SprintListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
