import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllBookingService } from '../Services/all-booking.service';
import { AllBooking } from '../Types/AllBooking';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  b:AllBooking={
    bookingId: 0,
    userId: '',
    shipId: 0,
    shipName: '',
    shipType: '',
    source: '',
    destination: '',
    departureDate: '',
    departureTime: '',
    arrivalDate: '',
    arrivalTime: '',
    product: '',
    quantity: 0,
    amount: 0
  }
 index=0
 allUserBooking: AllBooking[]=[]
 constructor(private allBookingService :AllBookingService) { }

 ngOnInit(): void {
   this.allBookingService.getAllBookings().subscribe(data=>{
     this.allUserBooking=data
   })
 }
 @ViewChild('content')
  content!: ElementRef;
  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a2');
    let _elementHandlers =
    {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };
    doc.html(this.content.nativeElement, {
      callback: (doc) => {
        doc.save('AllBookings.pdf');
      }

    });

  }
 
}
