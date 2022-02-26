import { Component, OnInit } from '@angular/core';
import { WalletService } from '../Services/wallet.service';
import { Wallet } from '../Types/Wallet';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private walletService :WalletService) { }

wallet:Wallet={
  id: 0,
  totalAmount: 0
}
walletArray:Wallet[]=[]

  ngOnInit(): void {
    this.walletService.getWallet().subscribe(data=>{
      this.walletArray=data
    })
  }

}
