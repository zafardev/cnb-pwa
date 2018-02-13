import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
 
const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news-detail/:srory_id', component: NewsDetailComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NdtvRoutingModule { }
