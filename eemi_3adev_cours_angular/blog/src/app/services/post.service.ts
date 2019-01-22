import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(
      private http: HttpClient
  ) { }

  getAll() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id) {
      return this.http.get('https://jsonplaceholder.typicode.com/posts' + '/' + id);
  }

    create(data) {
        return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
    }

    edit(id, data) {
        return this.http.put('https://jsonplaceholder.typicode.com/posts/' + id, data);
    }

    delete(id) {
        return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
    }
}
