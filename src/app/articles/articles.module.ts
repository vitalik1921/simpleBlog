import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownPipe } from '../shared/_pipes/markdown.pipe';
import { TruncatePipe } from '../shared/_pipes/truncate.pipe';
import { ArticlesService } from '../shared/_services/articles.service';
import { ArchiveResolverService } from './archive/archive-resolver.service';
import { ArchiveComponent } from './archive/archive.component';
import { ArticleResolverService } from './article/article-resolver.service';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {
    path: 'article/:id',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolverService
    }
  },
  {
    path: 'archive/:page',
    component: ArchiveComponent,
    resolve: {
      articles: ArchiveResolverService
    }
  },
  {
    path: 'new-article',
    component: EditArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    TruncatePipe,
    MarkdownPipe,
    ArticleComponent,
    ArchiveComponent,
    EditArticleComponent
  ],
  providers: [
    ArticlesService,
    ArchiveResolverService,
    ArticleResolverService
  ]
})

export class ArticlesModule { }
