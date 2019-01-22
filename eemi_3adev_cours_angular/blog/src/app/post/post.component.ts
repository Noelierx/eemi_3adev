import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../services/post.service';
import { CommentsService } from '../services/comments.service';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService, CommentsService]
})
export class PostComponent implements OnInit {

    postId: number = null;
    comments: Object = [];
    posts: any;
    private router: any;

    constructor(
        private route: ActivatedRoute,
        private p: PostService,
        private c: CommentsService
    ) { }

    ngOnInit() {


        this.route.params.forEach((params: Params) => {
            const id = +params['id'];


            // Post
            this.p.getPost(id).subscribe(
                r => this.posts = r,
                error => console.error('Error: ' + error)
            );

            // Comments
            this.c.getCommentsByPostId(id).subscribe(
                r => this.comments = r,
                error => console.error('Error: ' + error)
            );

            // DELETE
            this.p.delete(this.postId).subscribe((res: any) => {
                this.router.navigate(['/']);
            }, (err: any) => {
                console.error(err);
            });

        });

    }

}


export interface Post {
    id: number;
    title: string;
    body: string;
}
