import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { Temp } from '../Types/Temp';

@Component({
  selector: 'app-approve-request',
  templateUrl: './approve-request.component.html',
  styleUrls: ['./approve-request.component.css']
})
export class ApproveRequestComponent implements OnInit {

  constructor(private restService:RestService) { }

  temp: Temp={
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    category: '',
    userId: '',
    password: '',
    rejected: false
  }
 tempArray: Temp[]=[]
index=0
  ngOnInit(): void {
    this.restService.getPendingUser().subscribe(data=>{
      this.tempArray=data
    })
  }
  onApproveClick(){
    this.restService.approveUser(this.tempArray[this.index]).subscribe(data=>{
      data=data;
      window.location.href="/approveRequest"
    })
  }
  onRejectClick(){
    this.restService.rejectUser(this.tempArray[this.index]).subscribe(data=>{
      data=data;
  //    window.location.href="/approveRequest"
    })
  }
}
