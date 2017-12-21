import { Article } from './../../shared/_models/article.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  articles: Article[] = [];
  currentPage = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.data.subscribe((data: { articles: Article[] }) => {
      this.articles = data.articles;
    }, (err) => {
      console.log('error hello');
    });
    this.route.params.subscribe((params) => {
      this.currentPage = parseInt(params.page, 0);
    });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.router.navigate(['/archive', this.currentPage - 1]);
    }
    return false;
  }

  nextPage() {
    this.router.navigate(['/archive', this.currentPage + 1]);
    return false;
  }
}
