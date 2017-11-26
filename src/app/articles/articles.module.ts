import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './_components/article/article.component';
import { ArchiveComponent } from './_components/archive/archive.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ArticleComponent,
    ArchiveComponent
  ],
  declarations: [ArticleComponent, ArchiveComponent]
})
export class ArticlesModule { }
export { Article } from './_models/article.model';
