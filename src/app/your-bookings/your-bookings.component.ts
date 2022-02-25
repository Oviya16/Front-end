import jsPDF from 'jspdf';
import { AllBookingService } from '../Services/all-booking.service';
import { AllBooking } from '../Types/AllBooking';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UtilService } from '../Services/util.service';
import { Booking } from '../Types/Booking';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-your-bookings',
  templateUrl: './your-bookings.component.html',
  styleUrls: ['./your-bookings.component.css']
})
export class YourBookingsComponent implements OnInit {

  
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
   book:Booking={
     bookingId: 0,
     shipId: 0,
     userId: '',
     product: '',
     quantity: 0,
     amount: 0
   }
  index=0;
  showModal: boolean = true;
  closeResult = '';
  allUserBooking: AllBooking[]=[]
  constructor(private allBookingService :AllBookingService,private utilService: UtilService,@Inject(NgbModal) private modalService:NgbModal) { }

  ngOnInit(): void {
    this.allBookingService.getUserBookings().subscribe(data=>{
      this.allUserBooking=data
    })
    
  }
  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result:any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason:any) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onCancelClick(){
    this.utilService.sendMessage(this.allUserBooking[this.index].bookingId);
    this.allBookingService.deleteBooking(this.allUserBooking[this.index]).subscribe(data=>{
      this.book=data;
    })
    //console.log(this.allUserBooking[this.index].bookingId);
    alert("Booking cancelled")
    window.location.href="/yourBookings"
  }

  @ViewChild('content')
  content!: ElementRef;
  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a3');
    let _elementHandlers =
    {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };
    doc.html(this.content.nativeElement, {
      callback: (doc) => {
        doc.save('YourBookikings.pdf');
      }

    });

  }
}
