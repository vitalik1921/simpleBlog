import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticleResolverService } from './_components/article/article-resolver.service'
import { ArticlesService } from '../shared/_services/articles.service';

import { ArticleComponent } from './_components/article/article.component';
import { ArchiveComponent } from './_components/archive/archive.component';

const routes: Routes = [
  {
    path: 'article/:id',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolverService
    }
  },
  { path: 'articles/:page', component: ArchiveComponent }
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
