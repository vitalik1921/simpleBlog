import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticleResolverService } from './article/article-resolver.service'
import { ArticlesService } from '../shared/_services/articles.service';

import { ArticleComponent } from './article/article.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  {
    path: 'article/:id',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolverService
    }
  },
  {
    path: 'articles/:page',
    component: ArchiveComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ArticleComponent,
    ArchiveComponent
  ],
  providers: [
    ArticlesService,
    ArticleResolverService
  ]
})

export class ArticlesModule { }
