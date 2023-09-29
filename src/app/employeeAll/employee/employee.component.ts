import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employees: Employee[] = [];
  newEmployee: Employee = { id: 0, title: '', description: '' };
  editingEmployee: Employee | null = null;
newTask: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = { id: 0, title: '', description: '' };
  }

  editEmployee(employee: Employee): void {
    this.editingEmployee = { ...employee };
  }

  updateEmployee(): void {
    if (this.editingEmployee) {
      this.employeeService.updateEmployee(this.editingEmployee);
      this.editingEmployee = null;
    }
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
  }
}
