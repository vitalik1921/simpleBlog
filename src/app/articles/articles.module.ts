import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './_components/article/article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleComponent]
})
export class ArticlesModule { }
export { Article } from './_models/article.model';
