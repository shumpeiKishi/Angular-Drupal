import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PostComponent } from './post.component';
import { BlogService } from './blog.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
   ],
  declarations: [
    AppComponent,
    PostComponent
  ],
  providers: [BlogService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
