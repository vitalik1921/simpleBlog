import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Article } from './../_models/article.model';

@Injectable()
export class ArticlesService {
  baseUrl = '//5a1dcbe610a6590012095c13.mockapi.io/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  get(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/article/${id}`);
  }

  getPage(page: number, limit: number, userId: string = null): Observable<Article[]> {
    const urlParams = new HttpParams();
    urlParams.set('page', page.toString());
    urlParams.set('limit', limit.toString());
    urlParams.set('userId', userId);
    return this.http.get<Article[]>(`${this.baseUrl}/article`, { params: urlParams });
  }

  // post(): Observable<Article> {
  //   return Observable.of(new Article('Hello World!', 'this is a content'));
  // }

  // put(article: Article): Observable<Article>  {
  //   return Observable.of(new Article('Hello World!', 'this is a content'));
  // }

  // delete(id: string): Observable<any> {
  //   return Observable.of('deleted');
  // }
}
