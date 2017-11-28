import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Article } from './../_models/article.model';


@Injectable()
export class ArticlesService {

  constructor() { }

  get(id: string): Observable<Article> {
    return Observable.of(new Article('Hello World!', 'this is a content'));
  }

  getPage(articlesPerPage: number, pageNumber: number): Observable<Array<Article>> {
    return Observable.of([new Article('Hello World!', 'this is a content')]);
  }

  post(): Observable<Article> {
    return Observable.of(new Article('Hello World!', 'this is a content'));
  }

  put(article: Article): Observable<Article>  {
    return Observable.of(new Article('Hello World!', 'this is a content'));
  }

  removeArticle(id: string): Observable<any> {
    return Observable.of('removed');
  }
}
