import { Component, Inject, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '../Services/tasks.service';
import { Tasks } from '../Types/Tasks';
import("../Types/Tasks");
@Component({
  selector: 'app-your-tasks',
  templateUrl: './your-tasks.component.html',
  styleUrls: ['./your-tasks.component.css']
})
export class YourTasksComponent implements OnInit {

  index=0;
  ts: Tasks={
    taskId:0,
    userId: '',
    task: '',
    fromDate: '',
    toDate: '',
    status: ''
  }

  task: Tasks[]=[]

  closeResult = '';
  constructor(@Inject(NgbModal) private modalService:NgbModal,private tasksService:TasksService) { }

  

  ngOnInit(): void {
    this.tasksService.getUserTasks().subscribe(data=>{
      this.task=data
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
  onEditStatusSubmit(){
  this.tasksService.editStatus(this.task[this.index]).subscribe(data=>{
    data=data
  })
  }
}
