import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { User } from '../Types/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  options = ['Employee','Manager','User'];
  confirmPassword: string = '';
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
    console.log(this.user)
    this.restService.postUser(this.user).subscribe(data => {
      data = data;
      if (data.status === 201) {
        alert("New user created successfully")
      }
    });
    alert("Success")
  }
  onInvalidSubmit(){
    alert("Please update the highlighted mandatory field(s)")
  }

}
