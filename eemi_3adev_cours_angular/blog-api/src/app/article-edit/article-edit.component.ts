import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  articleId: number = null;
  article: any = {
    title: null,
    body: null
  };

  articleForm: FormGroup = null;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.articleId = parseInt(params['id'], 10);
        this.getArticle();
      }
    });
  }

  getArticle() {
    this.articlesService.get(this.articleId).subscribe((res: any) => {
      this.articleForm.patchValue(res);
      this.articleForm.addControl(
        'idUser',
        new FormControl(
          'test',
          [])
      );

      //desactiver
      // this.articleForm.controls.title.disable();
    }, (err: any) => {
      console.error(err);
    });
  }

  submit() {
    console.log(this.articleForm);
    return;
    if (this.articleId) { // Edit
      this.articlesService.edit(this.articleId, this.articleForm.value).subscribe((res: any) => {
        console.log('edition ok');
      }, (err: any) => {
        console.error(err);
      });
    } else { // Create
      this.articlesService.create(this.articleForm.value).subscribe((res: any) => {
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

    this.articleForm = this.fb.group(form);
  }
}
