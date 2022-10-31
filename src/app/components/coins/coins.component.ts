import { Component, OnInit } from '@angular/core';
import { CryptosService } from '../../services/cryptos/cryptos.service';
import { Coin } from '../../models/crypt.model'

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  titles: string[] = [
    '#',
    'Coin',
    'Price USD',
    'Price change 24h',
    'Total Volume'
  ]

  coin: string = '';

  constructor(private cryptoService: CryptosService) { }

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.cryptoService.getMarketCoins().subscribe(
      res => {
        this.coins = res;
        this.filteredCoins = res;
      }
    )
  }

  searchCoin() {
    this.filteredCoins = this.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(this.coin.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.coin.toLowerCase())
    });
  }


}
