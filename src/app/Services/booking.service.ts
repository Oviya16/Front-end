import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Types/Booking';
import { ShipDetails } from '../Types/ShipDetails';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  root_url = "http://localhost:9090/";

  getPassengerShips() {
    return this.http.get<ShipDetails[]>(this.root_url+"passenger");
  }
  getCargoShips() {
    return this.http.get<ShipDetails[]>(this.root_url+"cargo");
  }
 
 addBooking(booking:Booking){
  const headers = { 'content-type': 'application/json'}
   
  const body = JSON.stringify(booking);
  return this.http.post<Booking>(this.root_url+"booking",body,{ 'headers': headers, 'observe': 'response'})
}
 }

