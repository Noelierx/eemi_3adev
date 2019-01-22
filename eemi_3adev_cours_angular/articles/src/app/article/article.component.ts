import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ArticlesService} from '../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any = null;
  articleId: number = null;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.articleId = parseInt(params['id'], 10);
        this.article = this.articlesService.get(this.articleId);
      }
    });
  }

}
