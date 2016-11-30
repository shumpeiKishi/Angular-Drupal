import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router }            from '@angular/router';

import { Node } from './node';
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

  getNodes(type: string, id = 'all'): Promise<Node[]> {
    let url = this.blogUrl + type + '/' + id;
    return this.http.get(url)
      .toPromise()
      .then((response) => response.json() as Node[])
      .catch(this.handleError);
  }

  getNode(type: string, id = 'all'): Promise<Node> {
    return this.getArticles(String(id))
      .then(nodes => nodes[0] as Node);
  }

  getArticles(id = 'all'): Promise<Node[]> {
    return this.getNodes('article');
  }

  getArticle(id: number): Promise<Node> {
    return this.getArticles(String(id))
      .then(articles => articles[0] as Node);
  }

  getPages(id = 'all'): Promise<Node[]> {
    return this.getNodes('page');
  }

  getMenuItems(id = 'all'): Promise<Node[]> {
    return this.getPages();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
