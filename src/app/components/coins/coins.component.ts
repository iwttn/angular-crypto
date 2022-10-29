import { Component, OnInit } from '@angular/core';
import { CryptosService } from '../../services/cryptos/cryptos.service';
import { Coin } from '../../models/crypt.model'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins: Coin[] = [];
  titles: string[] = [
    '#',
    'Coin',
    'Price'
  ]

  constructor(private cryptoService: CryptosService) { }

  ngOnInit(): void {
    this.getCoins();

  }

  getCoins(): void {
    this.cryptoService.getMarketCoins().subscribe(
      res => this.coins = res
    )
  }


}
