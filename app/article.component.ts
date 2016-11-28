import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Article } from './article';
import { BlogService } from './blog.service';

@Component({
  selector: 'my-article',
  template: `
  <div>
    <pre>{{article.title | json }}</pre>

  </div>
    `
})
export class ArticleComponent {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.blogService.getArticle(+params['id']))
      .subscribe(article => this.article = article);
  }
}
