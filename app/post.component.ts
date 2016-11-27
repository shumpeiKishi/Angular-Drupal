import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { BlogService } from './blog.service';


@Component({
  selector: 'post-list',
  template: `
    <div *ngFor="let article of articles">
      <h3>{{ article.title[0].value }}</h3>
      <div [innerHTML]="article.body[0].value">

      </div>
    </div>
    `
})

export class PostComponent {

  articles: Article[];

  constructor(
    private blogService: BlogService
  ) {}

  getArticles(): void {
    this.blogService
      .getArticles()
      .then(articles => this.articles = articles);
  }

  ngOnInit(): void {
    this.getArticles();
  }

}
