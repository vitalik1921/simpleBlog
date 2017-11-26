import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './_components/article/article.component';
import { ArchiveComponent } from './_components/archive/archive.component';

const routes: Routes = [
  { path: 'article/:id', component: ArticleComponent },
  { path: 'articles', component: ArchiveComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    ArticleComponent,
    ArchiveComponent
  ],
  declarations: [ArticleComponent, ArchiveComponent]
})

export class ArticlesModule { }
export { Article } from './_models/article.model';
