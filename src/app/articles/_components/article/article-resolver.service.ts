import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ArticlesService } from './../../../shared/_services/articles.service';
import { Article } from '../../../shared/_models/article.model';

@Injectable()
export class ArticleResolverService implements Resolve<Article> {

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    return this.articlesService.get(route.params['id']);
  }
}
