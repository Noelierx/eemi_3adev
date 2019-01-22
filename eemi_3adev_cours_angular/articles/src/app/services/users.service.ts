import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(
      private http: HttpClient
  ) { }

  getList() {
    return this.http.get('https://reqres.in/api/users');
  }

  create(data) {
    return this.http.post('https://reqres.in/api/users',
        data, {
      headers: {
        'Authorization': 'monToken'
      }
        });
  }

}
