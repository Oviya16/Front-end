import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { User } from '../Types/User';
import{ Response } from '../Types/Response';
import { UtilService } from '../Services/util.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    category: '',
    userId: '',
    password: ''
  }
  constructor(private restService: RestService,private utilService: UtilService) { 

  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log("here")
    this.restService.login(this.user).subscribe(data => {
   
      alert("Logged In")
      window.location.href="/"
      document.cookie = "userId=" + this.user.userId;
      document.cookie = "category=" + data.category;
      console.log(data.category)
    }, error => {
      console.log(error.status)
      if (error.error.category == "Password") {
        alert("Password is incorrect")
      } else if (error.error.category == "UserId") {
        alert("UserId not found")
      }
    })
  }

}
