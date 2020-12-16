import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];

  constructor() {}

  getEmployees$(nums: number): Observable<Employee[]> {
    for (let counter = 1; counter <= nums; counter++) {
      this.employees.push({
        id: counter,
        name: `This is name: ${counter}`,
        age: 20 + (counter % 10),
      });
    }
    return of(this.employees);
  }
}
