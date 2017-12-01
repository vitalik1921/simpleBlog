import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../shared/_models/article.model';
import { MarkedOptions } from 'marked';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  private md: any;
  @Input() article: Article;
  @Input() short = false;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (!this.article) {
      this.route.data.subscribe((data: { article: Article }) => {
        // data.article.content = this.md.parse(data.article.content);
        this.article = data.article;
        });
      }
    }
  }
}
