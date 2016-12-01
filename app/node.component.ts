import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Node } from './node';
import { BlogService } from './blog.service';

@Component({
  selector: 'my-node',
  template: `
  <div *ngIf="node">
    <h2>{{node.title[0].value}}</h2>
    <div [innerHTML]="node.body[0].value"></div>
  </div>
  <div *ngIf="!node">
    Loading ... <i class="fa fa-x4 fa-spinner"></i>
  </div>
    `
})
export class NodeComponent {
  node: Node;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.blogService.getNode(params['id']))
      .subscribe(node => this.node = node);
  }
}
