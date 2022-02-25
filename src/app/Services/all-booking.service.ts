import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllBooking } from '../Types/AllBooking';
import { Booking } from '../Types/Booking';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AllBookingService {
  [x: string]: any;
public bookingID: any;

  constructor(private http: HttpClient,private utilService:UtilService) { 
  //this.bookingID= this.bookingID=utilService.getMessage()
  }
  root_url = "http://localhost:9090/";


  getUserBookings() {
    return this.http.get<AllBooking[]>(this.root_url+"bookings/"+ this.utilService.readLocalStorageUserId() as string);
  }
  getAllBookings() {
    return this.http.get<AllBooking[]>(this.root_url+"allBookings");
  }
  deleteBooking(booking:Booking){
    this.bookingID=this.utilService.getMessage()
  //  console.log(this.utilService.getMessage())
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(booking);
    return this.http.delete<Booking>(this.root_url+"delete/"+this.bookingID);
  }
}