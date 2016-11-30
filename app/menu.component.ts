import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Node } from './node';
import { BlogService } from './blog.service';


@Component({
  selector: 'my-menu',
  template: `
    <li *ngFor="let menuItem of menuItems" class="nav-item">
        <a [routerLink]="['/node', menuItem.nid[0].value]" class="nav-link">
          {{ menuItem.title[0].value }}
        </a>
    </li>
    `
})

export class MenuComponent {

  menuItems: Node[];

  constructor(
    private blogService: BlogService
  ) {}

  getMenuItems(): void {
    this.blogService
      .getMenuItems()
      .then(menuItems => this.menuItems = menuItems);
  }

  ngOnInit(): void {
    this.getMenuItems();
  }
}
