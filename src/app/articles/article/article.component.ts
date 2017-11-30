import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../shared/_models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() short = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!this.article) {
      this.route.data.subscribe((data: { article: Article }) => {
        this.article = data.article;
      });
    }
  }
}
