import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //injecte dans le module root (app.module.ts)
})
export class ArticlesService {

    private articles: any = [
        {
            id: 5,
            title: 'Test',
            text: 'dff dfgj dghjdg hj dghjd'
        },
        {
            id: 10,
            title: 'Test 10',
            text: 'df fhghjrjk rhjkwgqdfgsfgfdgjdg j'
        },
        {
            id: 15,
            title: 'Test 15',
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
    ];

  constructor() { }

  getList () {
    return this.articles;
  }

  get(id) {
    return this.articles.find((article) => {
        return article.id === id;
    });
  }
}
