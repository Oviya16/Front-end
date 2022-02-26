import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallet } from '../Types/Wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  root_url = "http://localhost:9090/";


  buyShips(wallet:Wallet) {
    const headers = { 'content-type': 'application/json'}
    var request={
      id:wallet.id,
      totalAmount:wallet.totalAmount
    }
    const body = JSON.stringify(wallet);
    return this.http.put<Wallet>(this.root_url+"walletShip",body,{ 'headers': headers, 'observe': 'response'})
  }
  booking(wallet:Wallet) {
    const headers = { 'content-type': 'application/json'}
    var request={
      id:wallet.id,
      totalAmount:wallet.totalAmount
    }
    const body = JSON.stringify(wallet);
    return this.http.put<Wallet>(this.root_url+"walletBooking",body,{ 'headers': headers, 'observe': 'response'})
  }
  getWallet() {
    return this.http.get<Wallet[]>(this.root_url+"wallet");
  }
}
