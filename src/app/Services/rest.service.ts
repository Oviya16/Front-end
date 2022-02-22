import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShipsComponent } from '../ships/ships.component';
import { Employee } from '../Types/Employee';
import { Response } from '../Types/Response';
import { Ship } from '../Types/Ship';
import { ShipStore } from '../Types/ShipStore';
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
  getShips() {
    return this.http.get<Ship[]>(this.root_url+"ship");
  }
  editShips(ship:Ship) {
    const headers = { 'content-type': 'application/json'}
    var request={
      shipId: ship.shipId ,
      shipNumber:ship.shipNumber,
      shipName:ship.shipName,
      shipModel:ship.shipModel
    }
    const body = JSON.stringify(ship);
    return this.http.put<Ship[]>(this.root_url+"ship",body,{ 'headers': headers, 'observe': 'response'})
  }
  buyShips(ship:ShipStore){
    const headers = { 'content-type': 'application/json'}
   
    const body = JSON.stringify(ship);
    return this.http.post<Ship>(this.root_url+"ship",body,{ 'headers': headers, 'observe': 'response'})
  }
  getShipsStore() {
    return this.http.get<ShipStore[]>(this.root_url+"shipStore");
  }
}
