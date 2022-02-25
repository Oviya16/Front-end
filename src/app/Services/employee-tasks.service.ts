import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import{ EmployeeTask } from '../Types/EmployeeTask';
import { Tasks } from '../Types/Tasks';
@Injectable({
  providedIn: 'root'
})
export class EmployeeTasksService {

  taskID=0;
  constructor(private http: HttpClient,private utilService:UtilService) { }

  root_url = "http://localhost:9090/";

  getTasks() {
    return this.http.get<EmployeeTask[]>(this.root_url+"employeeTasks/"+ "vimal_p");
  }
  deleteTasks(tasks:Tasks){
    this.taskID=this.utilService.getMessage();
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(tasks);
    return this.http.delete<Tasks>(this.root_url+"deleteTask/"+this.taskID);
  }
  addTask(tasks:Tasks){
    const headers = { 'content-type': 'application/json'}
   
    const body = JSON.stringify(tasks);
    return this.http.post<Tasks>(this.root_url+"addTask",body,{ 'headers': headers, 'observe': 'response'})
  }
}
