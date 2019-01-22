import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

    postId: number = null;
    post: any = {
        title: null,
        body: null
    };

    postForm: FormGroup = null;

    constructor(
        private postsService: PostService,
        private route: ActivatedRoute,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.initForm();
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.postId = parseInt(params['id'], 10);
                this.getPosts();
            }
        });
    }

    getPosts() {
        this.postsService.get(this.postId).subscribe((res: any) => {
            this.postForm.patchValue(res);
            this.postForm.addControl(
                'idUser',
                new FormControl(
                    'test',
                    [])
            );

        }, (err: any) => {
            console.error(err);
        });
    }

    submit() {
        console.log(this.postForm);
        return;
        if (this.postId) {
            this.postsService.edit(this.postId, this.postForm.value).subscribe((res: any) => {
                console.log('edition ok');
            }, (err: any) => {
                console.error(err);
            });
        } else {
            this.postsService.create(this.postForm.value).subscribe((res: any) => {
                console.log('ajout ok');
            }, (err: any) => {
                console.error(err);
            });
        }
    }


    initForm() {
        const form: any = {
            title: [
                null,
                [
                    Validators.required,
                    Validators.minLength(4)
                ]
            ],
            body: [
                null,
                [
                    Validators.required,
                    Validators.minLength(10)
                ]
            ]
        };

        this.postForm = this.fb.group(form);
    }
}
