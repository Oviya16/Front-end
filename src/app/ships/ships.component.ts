import { Component, Inject, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ship } from '../Types/Ship';
import { ShipStore } from '../Types/ShipStore';

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

  index=0
  showModal: boolean = true;
  closeResult = '';

  constructor(private restService: RestService,@Inject(NgbModal) private modalService:NgbModal) { }

  ngOnInit(): void {
    this.restService.getShips().subscribe(data=>{
      this.ship=data
      console.log(this.ship)
      this.restService.getShipsStore().subscribe(data=>{
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
    this.restService.editShips(this.ship[this.index]).subscribe(data => {
      data = data;
      //window.location.href="/employee"
    })

  }
  onBuyClick(){
    this.restService.buyShips(this.ships).subscribe(data =>{
      data=data;
     window.location.href="/ship"
    })
  }
  }



