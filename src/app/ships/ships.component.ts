import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ship } from '../Types/Ship';
import { ShipStore } from '../Types/ShipStore';
import { ShipService } from '../Services/ship.service';
import jsPDF from 'jspdf';
import { Wallet } from '../Types/Wallet';
import { WalletService } from '../Services/wallet.service';
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  s:Ship= {
    shipId: 0,
    shipNumber: '',
    shipName: '',
    shipModel: ''
  }
  ship: Ship []= []

  ships:ShipStore={
    shipNumberStore:'',
    shipNameStore:'',
    shipModelStore:'',
    cost: 0
  }
  shipStore : ShipStore[]=[]
  wallet:Wallet={
    id: 0,
    totalAmount: 0
  }
  walletArray:Wallet[]=[];
  index=0
  showModal: boolean = true;
  closeResult = '';

  constructor(private shipService: ShipService,@Inject(NgbModal) private modalService:NgbModal,private walletService:WalletService) { }

  ngOnInit(): void {
    this.shipService.getShips().subscribe(data=>{
      this.ship=data
      console.log(this.ship)
      this.shipService.getShipsStore().subscribe(data=>{
        this.shipStore=data
        console.log(this.shipStore)
      })
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

  onEditSubmit(){
    this.shipService.editShips(this.ship[this.index]).subscribe(data => {
      data = data;
      //window.location.href="/employee"
    })

  }
  onBuyClick(){
    this.shipService.buyShips(this.ships).subscribe(data =>{
      data=data;
      window.location.href="/ship"
    })
    this.walletService.getWallet().subscribe(data=>{
      this.walletArray=data
      this.walletArray[0].totalAmount-=this.ships.cost;
      this.walletService.buyShips(this.walletArray[0]).subscribe(data=>{
        data=data
      })
    })
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
        doc.save('Ships.pdf');
      }

    });
  } 
}