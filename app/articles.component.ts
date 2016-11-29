import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Article } from './article';
import { BlogService } from './blog.service';


@Component({
  selector: 'my-articles',
  template: `
    <div *ngFor="let article of articles">
      <h3>
        <a [routerLink]="['/node', article.nid[0].value]">
          {{ article.title[0].value }}
        </a>
      </h3>
    </div>
    `
})

export class ArticlesComponent {

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
