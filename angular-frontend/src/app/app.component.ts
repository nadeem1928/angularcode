//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private employee:EmployeeService) {}
  title = 'Angular 10 Spring Boot CRUD Full Stack App';
}
