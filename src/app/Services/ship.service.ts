import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship } from '../Types/Ship';
import { ShipStore } from '../Types/ShipStore';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient) { }

  root_url = "http://localhost:9090/";

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


