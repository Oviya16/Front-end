import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { User } from '../Types/User';

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
  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.restService.login(this.user).subscribe(data => {
      if (data.status == 200) {
        alert("Logged In")
      }
    }, error => {
      if(error.status==400){
        alert("Password not matching")
      }
      else if(error.status == 404){
        alert("User ID not found")
      }
    })
  }

}
