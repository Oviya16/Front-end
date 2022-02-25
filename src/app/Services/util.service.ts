import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  loggedIn = false;
  constructor() { }

  readLocalStorageUserId() {
    return localStorage.getItem("shipUser");
  }

  readLocalStorageRole() {
    return localStorage.getItem("shipCategory");
  }
  private subject=0;

    sendMessage(message: number) {
        this.subject=message;
        
    }

 //  clearMessage() {
    //    this.subject.next();
   // }

    getMessage(): number {
      return this.subject;
      console.log(this.subject)


    }

}