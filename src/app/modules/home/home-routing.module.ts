import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentsComponent } from './components/home-contents/home-contents.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';

const routes: Routes = [
  { path: '', component: HomeContentsComponent },
  { path: 'bikes', component: CommingSoonComponent },
  {path: 'reviews', component: CommingSoonComponent},
  { path: 'sell-cars', component: CommingSoonComponent },
  { path: 'discuss', component: CommingSoonComponent },
  { path: 'videos', component: CommingSoonComponent },
  { path: 'shop', component: CommingSoonComponent },
  { path: 'elite', component: CommingSoonComponent },
  { path: 'photos', component: CommingSoonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
