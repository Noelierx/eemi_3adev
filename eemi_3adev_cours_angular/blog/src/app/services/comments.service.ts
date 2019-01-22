import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CommentsService {

    constructor(
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get('https://jsonplaceholder.typicode.com/comments');
    }

    getCommentsByPostId(id) {
        return this.http.get('https://jsonplaceholder.typicode.com/comments' + '?postId=' + id);
    }
}
