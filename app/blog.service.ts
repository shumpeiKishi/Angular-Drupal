import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router }            from '@angular/router';

import { Article } from './article';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {
  private headers = new Headers({
    'Accept': 'application/json'
  });
  private blogUrl = 'http://blog.shumpeikishi.com/rest/';

  constructor(
    private http: Http
  ) {}

  getArticles(id = 'all'): Promise<Article[]> {
    return this.http.get(this.blogUrl + id)
      .toPromise()
      .then((response) => response.json() as Article[])
      .catch(this.handleError);
  }

  getArticle(id: number): Promise<Article> {
    return this.getArticles(String(id))
      .then(articles => articles[0] as Article);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
