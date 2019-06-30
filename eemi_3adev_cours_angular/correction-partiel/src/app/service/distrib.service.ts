import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistribService {

  constructor(
      private httpClient: HttpClient
  ) {

  }

  buy(values) {
    return this.httpClient.post('https://api.letgy.com/1.0/distrib/buy', values);
  }
}
