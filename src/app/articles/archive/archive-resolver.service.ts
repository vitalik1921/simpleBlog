import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { APP_CONFIG, AppConfig } from '../../config';
import { Article } from '../../shared/_models/article.model';
import { ArticlesService } from '../../shared/_services/articles.service';

@Injectable()
export class ArchiveResolverService implements Resolve<Array<Article>> {
  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.articlesService.getPage(route.params['page'] || 1,
      route.queryParams['userId'] || null);
  }
}


