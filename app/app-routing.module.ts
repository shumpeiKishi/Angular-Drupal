import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { NodeComponent } from './node.component';
import { ArticlesComponent } from './articles.component';


const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'node/:id', component: NodeComponent }
]

@NgModule({
  imports:      [
    RouterModule.forRoot(routes)
   ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
