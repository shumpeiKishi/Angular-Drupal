import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article.component';


const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'node/:id', component: ArticleComponent }
]

@NgModule({
  imports:      [
    RouterModule.forRoot(routes)
   ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
