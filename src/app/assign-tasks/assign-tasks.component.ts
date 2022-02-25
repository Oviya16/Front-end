import { Component, Inject, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeTasksService } from '../Services/employee-tasks.service';
import { UtilService } from '../Services/util.service';
import { EmployeeTask } from '../Types/EmployeeTask';
import { Tasks } from '../Types/Tasks';

@Component({
  selector: 'app-assign-tasks',
  templateUrl: './assign-tasks.component.html',
  styleUrls: ['./assign-tasks.component.css']
})
export class AssignTasksComponent implements OnInit {

  constructor(private employeeTasksService:EmployeeTasksService,@Inject(NgbModal) private modalService:NgbModal,private utilService:UtilService) { }

  t:EmployeeTask={
    taskId: 0,
    managerId: '',
    userId: '',
    task: '',
    fromDate: '',
    toDate: '',
    status: ''
  }
  task:Tasks={
    taskId: 0,
    userId: '',
    task: '',
    fromDate: '',
    toDate: '',
    status: ''
  }
  index=0
  closeResult=''
  tasks:Tasks[]=[]
  empTasks:EmployeeTask[]=[];

  ngOnInit(): void {
  this.employeeTasksService.getTasks().subscribe(data=>{
      this.empTasks=data
 },error=>{
   alert(error)
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
  onDeleteClick(){
    this.utilService.sendMessage(this.empTasks[this.index].taskId)
    this.employeeTasksService.deleteTasks(this.tasks[this.index]).subscribe(data=>{
      this.task=data
      window.location.href="/assignTasks"
    })
    
  }
  onAddSubmit(){
    this.employeeTasksService.addTask(this.task).subscribe(data=>{
      data=data
      window.location.href="/assignTasks"
    })
  }
}
