import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShipsComponent } from '../ships/ships.component';
import { Employee } from '../Types/Employee';
import { Response } from '../Types/Response';
import { Ship } from '../Types/Ship';
import { ShipStore } from '../Types/ShipStore';
import { Temp } from '../Types/Temp';
import { User } from '../Types/User';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  root_url = "http://localhost:9090/";

  getUser() {
    return this.http.get<User>(this.root_url + "User");
  }

  postUser(user: User) {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user);
    return this.http.post<User>(this.root_url + "User", body, { 'headers': headers, 'observe': 'response' });
  }

  login(user: User) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: user.userId,
      password: user.password
    }
    const body = JSON.stringify(request);
    return this.http.post<Response>(this.root_url + "login", body, { 'headers': headers});
  } 
  getPendingUser() {
    return this.http.get<Temp[]>(this.root_url + "Temp");
  }
  approveUser(user: User) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: user.userId
    }
    const body = JSON.stringify(request);
    return this.http.put<any>(this.root_url + "Approve", body, { 'headers': headers});
  } 
  rejectUser(user: Temp) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: user.userId
    }
    const body = JSON.stringify(request);
    return this.http.post<any>(this.root_url + "Reject", body, { 'headers': headers});
  } 
}