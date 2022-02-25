import { Component, OnInit } from '@angular/core';
import { UtilService } from '../Services/util.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isShown = false;
  isLoggedIn= false;
  category =this.utilService.readLocalStorageRole();
  
  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.category =this.utilService.readLocalStorageRole();
  if(this.category =='user' || this.category=='employee'|| this.category=='manager' || this.category=='superAdmin'){
    this.isLoggedIn = true;
  } else{
    this.isLoggedIn = false;
  }

  }
  onLogOut() {
    localStorage.removeItem('shipUser')
    localStorage.removeItem('shipCategory')
    window.location.href="/"
  }
}
