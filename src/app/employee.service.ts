import { Injectable } from '@angular/core';
import { Employee } from './employeeAll/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [];
  private currentId = 1;
  private localStorageKey = 'employees';

  constructor() {
    // Load employees from localStorage when the service is initialized
    const storedEmployees = localStorage.getItem(this.localStorageKey);
    if (storedEmployees) {
      this.employees = JSON.parse(storedEmployees);
    }
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  saveEmployees(): void {
    // Save employees to localStorage whenever the data changes
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.employees));
  }

  addEmployee(employee: Employee): void {
    employee.id = this.currentId++;
    this.employees.push(employee);
    this.saveEmployees();
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex((t) => t.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = { ...updatedEmployee };
      this.saveEmployees();
    }
  }

  deleteEmployee(id: number): void {
    const index = this.employees.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      this.saveEmployees();
    }
  }
}
