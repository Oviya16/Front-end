import { Component, Inject, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { Employee } from '../Types/Employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  e:Employee= {
    userId:'',
    level:'',
    salary:'',
    manager:''
  }
  employee: Employee []= []
  index=0
  showModal: boolean = true;
  closeResult = '';


  constructor(private restService: RestService,@Inject(NgbModal) private modalService:NgbModal) { }

  ngOnInit(): void {
    this.restService.getEmployee().subscribe(data=>{
      this.employee=data
      console.log(this.employee)
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
    this.restService.editEmployee(this.employee[this.index]).subscribe(data => {
      data = data;
      //window.location.href="/employee"
    })

  }
  onAddSubmit(){
    this.restService.addEmployee(this.e).subscribe(data =>{
      data=data;
      window.location.href="/employee"
    })
  }
}
