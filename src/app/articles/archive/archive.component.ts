import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../config';
import { Article } from '../../shared/_models/article.model';
import { ArticlesService } from '../../shared/_services/articles.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  articles: Article[] = [];
  currentPage = 1;
  isPrevPage = true;
  isNextPage = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    this.route.data.subscribe((data: { articles: Article[] }) => {
      this.articles = data.articles;
    }, (err) => {
      console.log(err);
    });
    this.route.params.subscribe((params) => {
      this.currentPage = parseInt(params.page, 0);
      this.updateButtons();
    });
  }

  updateButtons() {
    this.articlesService.isPage(this.currentPage + 1, this.route.queryParams['userId'])
      .then((isNextPage) => {
        this.isNextPage = isNextPage;
      });
    this.articlesService.isPage(this.currentPage - 1, this.route.queryParams['userId'])
      .then((isPrevPage) => {
        this.isPrevPage = isPrevPage;
      });
  }

  prevPage() {
    this.router.navigate(['/archive', this.currentPage - 1]).then(() => {
      this.updateButtons();
    });
    return false;
  }

  nextPage() {
    this.router.navigate(['/archive', this.currentPage + 1]).then(() => {
      this.updateButtons();
    });
    return false;
  }
}
