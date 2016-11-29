import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router }            from '@angular/router';

import { Article } from './article';
import { Page } from './page';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {
  private headers = new Headers({
    'Accept': 'application/json',
    'Authorization': 'Basic cmVzdDpyZXN0'
  });
  private blogUrl = 'http://blog.shumpeikishi.com/rest/';

  constructor(
    private http: Http
  ) {}

  getNodes(type: string, id = 'all'): Promise<Article[]> {
    let url = this.blogUrl + type + '/' + id;
    return this.http.get(url)
      .toPromise()
      .then((response) => response.json() as Article[])
      .catch(this.handleError);
  }

  getArticles(id = 'all'): Promise<Article[]> {
    return this.getNodes('article');
  }

  getArticle(id: number): Promise<Article> {
    return this.getArticles(String(id))
      .then(articles => articles[0] as Article);
  }

  getPages(id = 'all'): Promise<Article[]> {
    return this.getNodes('page');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
