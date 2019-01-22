import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [PostService]
})
export class HomeComponent implements OnInit {

    posts: Object = [];

    constructor(private p: PostService) {
        this.p.getAll().subscribe(
            result => this.posts = result,
            error => console.error('Error: ')
        );
    }

    ngOnInit() {
    }

}

