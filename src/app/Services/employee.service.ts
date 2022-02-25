import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Types/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  root_url = "http://localhost:9090/";

  getEmployee() {
    return this.http.get<Employee[]>(this.root_url+"employee");
  }
  editEmployee(employee:Employee) {
    const headers = { 'content-type': 'application/json'}
    var request={
      userId:employee.userId,
      level:employee.level,
      salary:employee.salary,
      manager:employee.manager
    }
    const body = JSON.stringify(employee);
    return this.http.put<Employee[]>(this.root_url+"employee",body,{ 'headers': headers, 'observe': 'response'})
  }
  addEmployee(employee:Employee){
    const headers = { 'content-type': 'application/json'}
   
    const body = JSON.stringify(employee);
    return this.http.post<Employee>(this.root_url+"employee",body,{ 'headers': headers, 'observe': 'response'})
  }
}
