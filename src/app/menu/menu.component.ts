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
  category =this.utilService.readCookie();
  
  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.category =this.utilService.readCookie();
  if(this.category =='user' || this.category=='employee'|| this.category=='manager' || this.category=='superAdmin'){
    this.isLoggedIn = true;
  } else{
    this.isLoggedIn = false;
  }

  }
  onLogOut() {
    var cookie = document.cookie;
    var cookieVal = cookie.split(";")
    document.cookie = cookieVal[0] + ";expires=Thu, 18 Dec 2013 12:00:00 UTC";
    document.cookie = cookieVal[1] + ";expires=Thu, 18 Dec 2013 12:00:00 UTC";
    window.location.href="/"
  }
}
