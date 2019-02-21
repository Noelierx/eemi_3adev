import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {

    constructor(
        private http: HttpClient,
    ) { }

    create(data) {
        return this.http.post('https://api.letgy.com/1.0/distrib/buy', data);
    }

    get(data) {
        return this.http.post('https://api.letgy.com/1.0/distrib/buy', data);
    }

}
