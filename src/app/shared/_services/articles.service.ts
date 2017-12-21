import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Article } from '../_models/article.model';
import { APP_CONFIG, AppConfig } from '../../config';

@Injectable()
export class ArticlesService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  get(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.config.baseUrl}/api/v1/article/${id}`);
  }

  getPage(page: number, limit: number, userId: string = null): Observable<Article[]> {
    const urlParams = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('userId', userId);
    return this.http.get<Article[]>(`${this.config.baseUrl}/api/v1/article`, { params: urlParams });
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
