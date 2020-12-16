import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-angular-virtial-scrolling-cdk',
  templateUrl: './angular-virtial-scrolling-cdk.component.html',
  styleUrls: ['./angular-virtial-scrolling-cdk.component.css'],
})
export class AngularVirtialScrollingCdkComponent implements OnInit {
  employees$: Observable<Employee[]>;
  items = Array.from({ length: 200000 }).map((_, i) => `Item ${i}`);

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.service.getEmployees$(12000);
  }
}
