import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router }            from '@angular/router';

import { Node } from './node';
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

  getNode(id = 'all'): Promise<Node> {
    return this.getNodes('node', String(id))
      .then(nodes => nodes[0] as Node)
      .catch(this.handleError);
  }

  getMenuItems(id = 'all'): Promise<Node[]> {
    return this.getNodes('menu');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
