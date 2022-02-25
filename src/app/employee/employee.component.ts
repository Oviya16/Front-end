import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { Employee } from '../Types/Employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../Services/employee.service';
import jsPDF from 'jspdf';
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


  constructor(private employeeService : EmployeeService,@Inject(NgbModal) private modalService:NgbModal) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(data=>{
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
    this.employeeService.editEmployee(this.employee[this.index]).subscribe(data => {
      data = data;
      //window.location.href="/employee"
    })

  }
  onAddSubmit(){
    this.employeeService.addEmployee(this.e).subscribe(data =>{
      data=data;
      window.location.href="/employee"
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
        doc.save('Employees.pdf');
      }

    });

  }
}
