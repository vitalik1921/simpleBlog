import { Component, OnInit } from '@angular/core';
import { Article } from '../../../shared/_models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor() {
    this.article = new Article('Hello World!', 'this is a content');
    console.log('article', this.article);
  }

  ngOnInit() {

  }
}
