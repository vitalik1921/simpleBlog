import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { Article } from './../_models/article.model';

@Injectable()
export class ArticlesService {
  baseUrl = '//5a1dcbe610a6590012095c13.mockapi.io/api/v1';

  constructor(
    private http: Http
  ) { }

  get(id: string): Observable<Article> {
    return this.http.get(`${this.baseUrl}/article/${id}`)
      .map((res: Response) => res.json());
  }

  getPage(page: number, limit: number): Observable<Article[]> {
    const urlParams: URLSearchParams = new URLSearchParams();
    urlParams.set('page', page.toString());
    urlParams.set('limit', limit.toString());
    return this.http.get(`${this.baseUrl}/article`, { params: urlParams })
      .map((res: Response) => res.json());
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
