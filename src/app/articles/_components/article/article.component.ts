import { Component, OnInit } from '@angular/core';
import { Article } from './../../_models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  private article: Article;

  constructor() {
    this.article = new Article('Hello World!', 'this is a content');
  }

  ngOnInit() {

  }

}
