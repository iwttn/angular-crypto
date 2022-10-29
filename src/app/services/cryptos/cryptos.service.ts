import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coin } from '../../models/crypt.model'

@Injectable({
  providedIn: 'root'
})
export class CryptosService {


  constructor(private http: HttpClient) {
  }

  getMarketCoins(): Observable<any> {
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  }
}

