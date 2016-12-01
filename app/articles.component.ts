import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Node } from './node';
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
      <p><i>{{ getDate(article.created[0].value) | date:'EEE' }}</i></p>
    </div>
    `
})

export class ArticlesComponent {

  articles: Node[];

  constructor(
    private blogService: BlogService
  ) {}

  getArticles(): void {
    this.blogService
      .getNodes('article')
      .then(nodes => this.articles = nodes);
  }

  getDate(timestamp: string): Date {
    return new Date(1000 * +timestamp);
  }

  ngOnInit(): void {
    this.getArticles();
  }
}
