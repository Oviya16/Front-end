import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../Types/Tasks';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  
  constructor(private http: HttpClient,private utilService:UtilService) { }

  root_url = "http://localhost:9090/";

getUserTasks() {
    return this.http.get<Tasks[]>(this.root_url+"tasks/"+ this.utilService.readLocalStorageUserId() as string);
 }

editStatus(task:Tasks) {
  const headers = { 'content-type': 'application/json'}
  var request={
    status:task.status
  }
  const body = JSON.stringify(task);
  return this.http.put<Tasks[]>(this.root_url+"editStatus",body,{ 'headers': headers, 'observe': 'response'})
}
}