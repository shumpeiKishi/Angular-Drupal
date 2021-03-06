import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ArticlesComponent } from './articles.component';
import { NodeComponent } from './node.component';
import { MenuComponent } from './menu.component';
import { BlogService } from './blog.service';

import { AppRoutingModule } from './app-routing.module';

import './rxjs-extentions';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    ArticlesComponent,
    NodeComponent,
    MenuComponent
  ],
  providers: [BlogService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
