import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-render-large-list';

  employees$: Observable<Employee[]>;

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.service.getEmployees$(12000);
  }
}
