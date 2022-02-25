import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../Services/booking.service';
import { Booking } from '../Types/Booking';
import { ShipDetails } from '../Types/ShipDetails';
import { UtilService } from '../Services/util.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  s:ShipDetails= {
    shipId: 0,
    shipName: '',
    shipType: '',
    source: '',
    destination: '',
    departureDate:'',
    departureTime: '',
    arrivalDate: '',
    arrivalTime: '',
    ticketsAvailable:'',
    ticketCost:0,
    product:'',
    quantity:1,
    amount :0
  }
  ship: ShipDetails []= []

  booking:Booking={
    bookingId: 0,
    shipId: 0,
    userId: '',
    product: '',
    quantity: 0,
    amount: 0
  }

  isPassenger: boolean=false
  options = ['coal','utilities','clothes'];
  index=0
  book:boolean=true;
  clicks: boolean=false;
  showModal: boolean = true;
  closeResult = '';

  constructor(private bookingService:BookingService ,@Inject(NgbModal) private modalService:NgbModal,private utilService: UtilService) { }

  ngOnInit(): void {
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
  onPassengerClick(){
      this.bookingService.getPassengerShips().subscribe(data=>{
        this.ship=data
        console.log(this.ship)
      })
      
  }
  onCargoClick(){
    this.bookingService.getCargoShips().subscribe(data=>{
      this.ship=data
      console.log(this.ship)
    })

  }
  onBookSubmit(){
    this.booking.product=this.ship[this.index].product;
    this.booking.quantity=this.ship[this.index].quantity;
    this.booking.userId=this.utilService.readLocalStorageUserId() as string
    this.booking.shipId=this.ship[this.index].shipId;
     this.booking.amount=this.booking.quantity*this.ship[this.index].ticketCost;
   //  localStorage.setItem('shipUser', this.booking.userId);
  //   this.bookingService.editShipDetails(this.ship[this.index]).subscribe(data=>{
  //     data=data 
  //   })
     console.log(this.ship[this.index])
  }
  onConfirmbooking(){
    this.bookingService.addBooking(this.booking).subscribe(data=>{
      data=data 
    })
    console.log(this.booking)
    window.location.href="/yourBookings"
  }
 
}
